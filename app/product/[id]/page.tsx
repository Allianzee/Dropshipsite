import { getProduct, formatPrice } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = getProduct(id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="page">
      <section className="section">
        <div className="productPage">
          <div className="gallery">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="galleryImage"
              />
            ))}
          </div>

          <div>
            <span className="badge">
              Free shipping over €20
            </span>

            <h1>{product.name}</h1>

            <p>{product.longDescription}</p>

            <h2>{formatPrice(product.price)}</h2>

            <form action="/api/checkout" method="POST">
              <input
                type="hidden"
                name="productId"
                value={product.id}
              />

              <button className="buyBtn" type="submit">
                Buy Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
