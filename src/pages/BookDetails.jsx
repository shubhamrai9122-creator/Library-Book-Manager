import { Link, useParams } from "react-router";
import BookCard from "../components/BookCard.jsx";

function BookDetails({ books, onIssue, onReturn }) {
  const { id } = useParams();
  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <main className="page empty">
        <h1>Book not found</h1>
        <Link className="primary-link" to="/books">Back to books</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <p className="breadcrumbs"><Link to="/books">Books</Link> / {book.title}</p>
      <section className="details">
        <div className={`detail-art art-${book.id % 4}`}>
          <span>{book.genre}</span>
          <strong>{book.title}</strong>
          <small>{book.author}</small>
        </div>
        <div className="detail-text">
          <p className="overline">{book.genre} · {book.year}</p>
          <h1>{book.title}</h1>
          <p className="author">by {book.author}</p>
          <p className="description">
            A popular title from our collection. Check the publication details and copy count below.
          </p>
          <dl className="facts">
            <div><dt>Year</dt><dd>{book.year}</dd></div>
            <div><dt>Pages</dt><dd>{book.pages}</dd></div>
            <div><dt>Total copies</dt><dd>{book.totalCopies}</dd></div>
            <div><dt>Available copies</dt><dd>{book.availableCopies}</dd></div>
          </dl>
          <BookCard book={book} onIssue={onIssue} onReturn={onReturn} />
        </div>
      </section>
    </main>
  );
}

export default BookDetails;
