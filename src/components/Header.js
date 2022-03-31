import React from 'react';
import { Link } from 'react-router-dom';
import user from '../image/user.png';

const Header = () => (
  <header>
    <div className="header-container">
      <h1>Bookstore CMS</h1>
      <nav className="navbar">
        <Link to="/" className="link">Books</Link>
        <Link to="/categories" className="link">Categories</Link>
      </nav>
    </div>
    <img className="user-img" src={user} width="45px" alt="user" />
  </header>
);

export default Header;
