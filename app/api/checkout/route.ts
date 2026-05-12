import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "@/lib/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const productId = String(formData.get("productId"));

    const product = getProduct(productId);

    if (!product) {
      return NextResponse.json({ error: "No product" });
    }

    const origin = process.env.NEXT_PUBLIC_SITE_URL!;

    const freeShipping = product.price >= 2000;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      shipping_address_collection: {
        allowed_countries: ["IT", "FR", "DE", "ES", "GB", "US"]
      },

      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: product.price,
            product_data: {
              name: product.name,
              description: product.description,
              images: [product.images[0]]
            }
          }
        },

        ...(freeShipping
          ? []
          : [
              {
                quantity: 1,
                price_data: {
                  currency: "eur",
                  unit_amount: 499,
                  product_data: {
                    name: "Shipping"
                  }
                }
              }
            ])
      ],

      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`
    });

    return NextResponse.redirect(session.url!, 303);
  } catch (err) {
    console.log(err);

    return NextResponse.json({
      error: "Stripe checkout failed"
    });
  }
}            currency: product.currency,
            unit_amount: product.price,
            product_data: {
              name: product.name,
              description: product.description,
            },
          },
        },
      ],
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel`,
      shipping_address_collection: {
        allowed_countries: ["IT", "FR", "DE", "ES", "NL", "BE", "IE", "PT", "AT"],
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 500 }
      );
    }

    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Checkout failed." },
      { status: 500 }
    );
  }
}
