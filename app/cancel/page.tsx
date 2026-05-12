export default function CancelPage() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <span className="badge">Checkout cancelled</span>
          <h1>No charge made.</h1>
          <p>You cancelled the checkout. You can go back and try again.</p>
          <div className="ctaRow">
            <a className="btn btnPrimary" href="/">Back to shop</a>
          </div>
        </div>
      </section>
    </main>
  );
}
