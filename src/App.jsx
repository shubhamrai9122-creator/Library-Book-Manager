import { useState } from "react";
import { Link, Route, Routes } from "react-router";
import BookDetails from "./pages/BookDetails.jsx";
import Books from "./pages/Books.jsx";
import Home from "./pages/Home.jsx";
import Issued from "./pages/Issued.jsx";
import Header from "./components/Header.jsx";
import startingBooks from "./data/books.js";

function App() {
  const [books, setBooks] = useState(startingBooks);

  function issueBook(id) {
    setBooks((current) =>
      current.map((book) =>
        book.id === id && !book.isIssued && book.availableCopies > 0
          ? { ...book, isIssued: true, availableCopies: book.availableCopies - 1 }
          : book,
      ),
    );
  }

  function returnBook(id) {
    setBooks((current) =>
      current.map((book) =>
        book.id === id && book.isIssued
          ? { ...book, isIssued: false, availableCopies: book.availableCopies + 1 }
          : book,
      ),
    );
  }

  const issuedCount = books.filter((book) => book.isIssued).length;

  return (
    <div className="site">
      <Header issuedCount={issuedCount} />
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route
          path="/books"
          element={<Books books={books} onIssue={issueBook} onReturn={returnBook} />}
        />
        <Route
          path="/books/:id"
          element={<BookDetails books={books} onIssue={issueBook} onReturn={returnBook} />}
        />
        <Route
          path="/issued"
          element={<Issued books={books} onIssue={issueBook} onReturn={returnBook} />}
        />
        <Route path="*" element={
          <main className="page empty">
            <h1>Page not found</h1>
            <Link className="primary-link" to="/">Return home</Link>
          </main>
        } />
      </Routes>
      <footer className="footer">
        <Link to="/">Library Shelf</Link>
        <span>Discover a book, one page at a time.</span>
      </footer>
    </div>
  );
}

export default App;
