import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.scss';

class NavMenu extends Component {
  render() {
    return (
      <div className="nav-menu">
        <ul className="nav-menu__list">
          <li className="nav-menu__li">
            <Link to="/shop" className="nav-menu__link">Shop</Link>
          </li>
          <li className="nav-menu__li">
            <Link to="/about" className="nav-menu__link">About</Link>
          </li>
          <li className="nav-menu__li">
            <Link to="adventures" className="nav-menu__link">Adventures</Link>
          </li>
          <li className="nav-menu__li">
            <div className="nav-menu__email-box">
              <input className="nav-menu__email" />
              <i className="icon-long-arrow-right nav-menu__arrow" />
            </div>
            <div className="nav-menu__social-media">
              <i className="icon-linkedin-sign" />
              <i className="icon-facebook-sign" />
              <i className="icon-instagram" />
            </div>
          </li>
          <li className="nav-menu__li">
            <Link className="nav-menu__link" to="/contact">Contact</Link>
            <Link className="nav-menu__link" to="/faq">FAQ</Link>
            <Link className="nav-menu__link" to="/privacy">Privacy Policy</Link>
            <Link className="nav-menu__link" to="/media">Media Kit</Link>
            <Link className="nav-menu__link" to="/terms">Terms of Use</Link>
          </li>
          <li className="nav-menu__li">
            <div>
              <div>Customer Support</div>
              <div><a>contact@alchemist.com</a></div>
            </div>
            <div>
              <div>@AbbottNYC 2016</div>
              <div>Site by <a>Alchemist</a></div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavMenu;
