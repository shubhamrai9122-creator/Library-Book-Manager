import { Link } from "react-router";

function BookCard({ book, onIssue, onReturn }) {
  const available = book.availableCopies > 0;

  return (
    <article className="book-card">
      <div className={`book-art art-${book.id % 4}`}>
        <span>{book.genre}</span>
        <strong>{book.title}</strong>
        <small>{book.author}</small>
      </div>
      <div className="book-info">
        <div className="book-title-row">
          <div>
            <p className="genre-label">{book.genre}</p>
            <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
            <p className="author">by {book.author}</p>
          </div>
          <span className={`badge ${available ? "available" : "unavailable"}`}>
            {available ? "Available" : "Not Available"}
          </span>
        </div>
        <div className="book-actions">
          <span>{book.availableCopies} / {book.totalCopies} copies</span>
          {book.isIssued ? (
            <button className="action-button return" onClick={() => onReturn(book.id)}>
              Return
            </button>
          ) : available ? (
            <button className="action-button issue" onClick={() => onIssue(book.id)}>
              Issue book
            </button>
          ) : (
            <span className="no-stock">Not Available</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default BookCard;
