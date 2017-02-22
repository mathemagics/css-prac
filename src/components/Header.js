import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <ul>
          <Link to="/shop">Shop</Link>
          <Link to="/adventures">Adventures</Link>
          <Link to="/about">About</Link>
        </ul>
        <div>logo</div>
        <ul>
          <Link to="signup">join</Link>
          <Link to="signin">Login</Link>
        </ul>
      </nav>
    );
  }
}

export default Header;
