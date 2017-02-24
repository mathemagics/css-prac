import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import MediaQuery from 'react-responsive';

import { toggleMenu } from '../../actions/';
import './styles.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    if (this.header !== null) {
      const links = document.getElementsByClassName('header__link');
      const icons = document.getElementsByClassName('header__icon');
      if (window.scrollY > 20) {
        this.header.style.backgroundColor = '#fff';
        for (let x = 0; x < links.length; x += 1) {
          links[x].style.color = '#000';
        }
        for (let x = 0; x < icons.length; x += 1) {
          icons[x].style.color = '#000';
        }
      } else {
        this.header.style.backgroundColor = 'rgba(0,0,0,0)';
        for (let x = 0; x < links.length; x += 1) {
          links[x].style.color = '#fff';
        }
        for (let x = 0; x < icons.length; x += 1) {
          icons[x].style.color = '#fff';
        }
      }
    }
  }
  openMenu(e) {
    e.preventDefault();
    this.props.toggleMenu();
  }

  render() {
    return (
      <div className="header" ref={(header) => { this.header = header; }}>
        <MediaQuery query="(min-width: 650px)">
          <ul className="header__link-list">
            <Link className="header__link" to="/shop">Shop</Link>
            <Link className="header__link" to="/adventures">Adventures</Link>
            <Link className="header__link" to="/about">About</Link>
          </ul>
        </MediaQuery>
        <MediaQuery query="(max-width: 649px)">
          <a href="/" onClick={this.openMenu} className="header__icon-link">
            <i className="icon-reorder header__icon" />
          </a>
        </MediaQuery>
        <Link className="header__link header__link--title" to="/">Abbott</Link>
        <MediaQuery query="(min-width: 650px)">
          <ul className="header__link-list">
            <Link className="header__link" to="signup">join</Link>
            <Link className="header__link" to="signin">Login</Link>
          </ul>
        </MediaQuery>
        <MediaQuery query="(max-width: 649px)">
          <i className="icon-shopping-cart header__icon" />
        </MediaQuery>
      </div>
    );
  }
}

export default connect(null, { toggleMenu })(Header);
