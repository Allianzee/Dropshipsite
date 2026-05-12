import Link from "next/link";

import { products, formatPrice } from "@/lib/products";

export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="logo">NovaDrop</div>
      </nav>

      <section className="hero">
        <div>
          <span className="badge">Free shipping over €20</span>

          <h1>Clean products for clean setups.</h1>

          <p>
            Modern dropshipping storefront with product pages,
            Stripe payments, and Vercel deployment.
          </p>
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
              <img
                src={product.images[0]}
                alt={product.name}
                className="productImage"
              />

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <div className="priceRow">
                <span className="price">
                  {formatPrice(product.price)}
                </span>

                <form action="/api/checkout" method="POST">
                  <input
                    type="hidden"
                    name="productId"
                    value={product.id}
                  />

                  <button className="buyBtn" type="submit">
                    Buy now
                  </button>
                </form>
              </div>

              <div style={{ marginTop: "12px" }}>
                <Link href={`/product/${product.id}`}>
                  View product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        © 2026 NovaDrop
      </footer>
    </main>
  );
}
