import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.scss';

class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    if (this.header !== null) {
      const links = document.getElementsByClassName('header__link');
      if (window.scrollY > 20) {
        this.header.style.backgroundColor = '#fff';
        for (let x = 0; x < links.length; x += 1) {
          links[x].style.color = '#000';
        }
      } else {
        this.header.style.backgroundColor = 'rgba(0,0,0,0)';
        for (let x = 0; x < links.length; x += 1) {
          links[x].style.color = '#fff';
        }
      }
    }
  }

  render() {
    return (
      <div className="header" ref={(header) => { this.header = header; }}>
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
