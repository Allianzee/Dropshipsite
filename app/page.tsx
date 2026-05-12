// app/page.tsx

import Link from "next/link";

import { products, formatPrice } from "@/lib/products";

export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="navInner">
          <div className="logo">NovaDrop</div>

          <div className="navLinks">
            <a href="#products">Products</a>
            <a href="#featured">Featured</a>
            <a href="#footer">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="heroInner">
          <div>
            <span className="badge">
              ✦ Free shipping over €20
            </span>

            <h1>
              Premium tech essentials for modern setups.
            </h1>

            <p>
              Minimal storefront powered by Next.js, Stripe,
              and Vercel. Fast, responsive, and designed to
              feel like a premium brand from day one.
            </p>

            <div className="heroActions">
              <a href="#products" className="primaryBtn">
                Shop now
              </a>

              <a href="#featured" className="secondaryBtn">
                Explore collection
              </a>
            </div>
          </div>

          <div className="heroPreview">
            <div className="previewCard">
              <img
                className="previewImage"
                src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1400&auto=format&fit=crop"
                alt="Workspace setup"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <div className="sectionInner">
          <div className="sectionHeader">
            <div className="sectionTitle">
              <h2>Featured products</h2>

              <p>
                Curated accessories designed for clean desks
                and productive spaces.
              </p>
            </div>
          </div>

          <div className="grid">
            {products.map((product) => (
              <article className="card" key={product.id}>
                <div className="cardImageWrap">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="productImage"
                  />
                </div>

                <div className="cardBody">
                  <div className="cardTop">
                    <h3>{product.name}</h3>

                    <span className="tag">New</span>
                  </div>

                  <p>{product.description}</p>

                  <div className="cardBottom">
                    <span className="price">
                      {formatPrice(product.price)}
                    </span>

                    <form
                      action="/api/checkout"
                      method="POST"
                    >
                      <input
                        type="hidden"
                        name="productId"
                        value={product.id}
                      />

                      <button
                        className="buyBtn"
                        type="submit"
                      >
                        Buy now
                      </button>
                    </form>
                  </div>

                  <Link
                    href={`/product/${product.id}`}
                    className="viewLink"
                  >
                    View product →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="footerInner">
          <span>© 2026 NovaDrop</span>

          <span>
            Built with Next.js + Stripe + Vercel
          </span>
        </div>
      </footer>
    </main>
  );
}
