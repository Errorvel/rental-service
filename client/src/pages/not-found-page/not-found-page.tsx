function NotFoundPage() {
  return (
    <div className="page">
      <main className="page__main">
        <section style={{ padding: '4rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
          <p style={{ fontSize: '1.5rem' }}>Page not found</p>
          <a href="/" style={{ display: 'block', marginTop: '2rem', color: '#4481c3' }}>Go back to main page</a>
        </section>
      </main>
    </div>
  );
}

export { NotFoundPage };
