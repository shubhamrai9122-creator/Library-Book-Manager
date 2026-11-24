import { useState } from "react";
import BookCard from "../components/BookCard.jsx";

const genres = ["All", "Biography", "Fiction", "Technology", "Self-Help"];

function Books({ books, onIssue, onReturn }) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");

  const visibleBooks = books.filter((book) => {
    const text = query.trim().toLowerCase();
    const matchesText =
      book.title.toLowerCase().includes(text) ||
      book.author.toLowerCase().includes(text);
    return matchesText && (genre === "All" || book.genre === genre);
  });

  return (
    <main className="page">
      <section className="page-heading">
        <p className="overline">THE COLLECTION</p>
        <h1>Browse the <em>shelves.</em></h1>
        <p>Search titles and authors, or choose a genre to narrow your list.</p>
      </section>

      <section className="list-section" aria-labelledby="book-list-heading">
        <div className="list-heading">
          <div>
            <h2 id="book-list-heading">All books</h2>
            <p>{visibleBooks.length} results</p>
          </div>
          <div className="filters">
            <label>
              <span className="sr-only">Search title or author</span>
              <input
                type="search"
                placeholder="Search books"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <label>
              <span className="sr-only">Choose a genre</span>
              <select value={genre} onChange={(event) => setGenre(event.target.value)}>
                {genres.map((item) => (
                  <option value={item} key={item}>{item === "All" ? "All genres" : item}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {visibleBooks.length ? (
          <div className="book-grid">
            {visibleBooks.map((book) => (
              <BookCard key={book.id} book={book} onIssue={onIssue} onReturn={onReturn} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No matches</h2>
            <p>Try a different search or genre.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Books;
