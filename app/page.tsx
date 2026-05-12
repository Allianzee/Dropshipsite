import { ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import { products, formatPrice } from "@/lib/products";

export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="logo">NovaDrop</div>
        <div className="navLinks">
          <a href="#products">Products</a>
          <a href="#shipping">Shipping</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <span className="badge">New drop live • Free shipping over €50</span>
          <h1>Clean products for clean setups.</h1>
          <p>
            A modern dropshipping storefront template with product cards,
            Stripe Checkout, trust sections, and Vercel-ready deployment.
          </p>

          <div className="ctaRow">
            <a className="btn btnPrimary" href="#products">Shop the drop</a>
            <a className="btn btnGhost" href="#shipping">How it works</a>
          </div>

          <div className="notice">
            Demo store. Replace products, policies, supplier details, and shipping times before selling for real.
          </div>
        </div>

        <div className="heroCard">
          <div className="productMock" />
          <div className="mockLabel">
            <b>Featured Drop</b>
            <p style={{ margin: "8px 0 0", color: "#CBD5E1" }}>
              Setup gear, travel picks, and daily essentials.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <div className="sectionTitle">
          <h2>Products</h2>
          <p>Stripe checkout included</p>
        </div>

        <div className="grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="image">{product.tag}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <div className="priceRow">
                <span className="price">{formatPrice(product.price)}</span>

                <form action="/api/checkout" method="POST">
                  <input type="hidden" name="productId" value={product.id} />
                  <button className="buyBtn" type="submit">
                    Buy now
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="shipping">
        <div className="grid">
          <div className="card">
            <Truck />
            <h3>Supplier ready</h3>
            <p>Add your supplier, shipping times, tracking system, and return rules.</p>
          </div>
          <div className="card">
            <ShieldCheck />
            <h3>Checkout safe</h3>
            <p>Payments go through Stripe Checkout instead of custom card handling.</p>
          </div>
          <div className="card">
            <ShoppingBag />
            <h3>Easy to edit</h3>
            <p>Change products from one file: <b>lib/products.ts</b>.</p>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="sectionTitle">
          <h2>FAQ</h2>
          <p>Put your real policies here</p>
        </div>

        <div className="card">
          <h3>How long does shipping take?</h3>
          <p>Replace this with your actual supplier shipping estimate.</p>

          <h3>Can I return an item?</h3>
          <p>Replace this with your real refund/return policy.</p>

          <h3>Is payment secure?</h3>
          <p>Checkout is handled by Stripe. You do not store card numbers on this site.</p>
        </div>
      </section>

      <footer className="footer">
        © 2026 NovaDrop. Replace this with your real business info.
      </footer>
    </main>
  );
}
