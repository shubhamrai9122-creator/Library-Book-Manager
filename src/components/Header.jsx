import { Link } from "react-router";

function Header({ issuedCount }) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <span className="logo-icon">S</span>
        <span>Library Shelf</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/issued">Issued <span className="count">{issuedCount}</span></Link>
      </nav>
    </header>
  );
}

export default Header;
