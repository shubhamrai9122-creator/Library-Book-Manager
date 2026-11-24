import { Link } from "react-router";
import BookCard from "../components/BookCard.jsx";

function Issued({ books, onIssue, onReturn }) {
  const issuedBooks = books.filter((book) => book.isIssued);

  return (
    <main className="page">
      <section className="page-heading">
        <p className="overline">YOUR BOOKS</p>
        <h1>Books you have <em>issued.</em></h1>
        <p>Return a book when you are ready for another read.</p>
      </section>
      {issuedBooks.length ? (
        <div className="book-grid issued-grid">
          {issuedBooks.map((book) => (
            <BookCard key={book.id} book={book} onIssue={onIssue} onReturn={onReturn} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No books issued yet</h2>
          <p>There is plenty to discover on the shelves.</p>
          <Link className="primary-link" to="/books">Browse books</Link>
        </div>
      )}
    </main>
  );
}

export default Issued;
