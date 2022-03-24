import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav className="navbar">
      <Link to="/" className="link">Books</Link>
      <Link to="/categories" className="link">Categories</Link>
    </nav>
  </header>
);

export default Header;
