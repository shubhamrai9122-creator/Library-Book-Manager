import { Link } from "react-router";

function Home({ books }) {
  const issued = books.filter((book) => book.isIssued).length;
  const unavailable = books.filter((book) => book.availableCopies === 0).length;

  return (
    <main>
      <section className="welcome">
        <div>
          <p className="overline">WELCOME TO THE LIBRARY</p>
          <h1>Make room<br />for a <em>good story.</em></h1>
          <p className="welcome-copy">
            Browse the shelves, find something that interests you, and keep track of your books.
          </p>
          <Link className="primary-link" to="/books">Explore books <span>→</span></Link>
        </div>
        <aside className="welcome-art" aria-hidden="true">
          <div className="art-sun" />
          <div className="art-shelf">
            <i /><i /><i /><i /><i />
          </div>
          <p>Take your time.<br />Find your next read.</p>
        </aside>
      </section>

      <section className="overview">
        <div className="section-title">
          <div>
            <p className="overline">LIBRARY OVERVIEW</p>
            <h2>At a glance</h2>
          </div>
          <Link to="/books" className="plain-link">See the collection →</Link>
        </div>
        <div className="stats">
          <article><span>Collection</span><strong>{books.length}</strong><small>book titles</small></article>
          <article><span>On loan</span><strong>{issued}</strong><small>books issued to you</small></article>
          <article><span>Unavailable</span><strong>{unavailable}</strong><small>no copies on the shelf</small></article>
        </div>
      </section>
    </main>
  );
}

export default Home;
