import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul className="header__link-list">
          <Link className="header__link" to="/shop">Shop</Link>
          <Link className="header__link" to="/adventures">Adventures</Link>
          <Link className="header__link" to="/about">About</Link>
        </ul>
        <Link className="header__link header__link--title" to="/">Abbott</Link>
        <ul className="header__link-list">
          <Link className="header__link" to="signup">join</Link>
          <Link className="header__link" to="signin">Login</Link>
        </ul>
      </div>
    );
  }
}

export default Header;
