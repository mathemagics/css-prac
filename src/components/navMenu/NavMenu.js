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
            <div className="nav-menu__sublink-row">
              <div className="nav-menu__sublink-column">
                <Link className="nav-menu__sublink" to="/contact">Contact</Link>
                <Link className="nav-menu__sublink" to="/faq">FAQ</Link>
                <Link className="nav-menu__sublink" to="/privacy">Privacy Policy</Link>
              </div>
              <div className="nav-menu__sublink-column">
                <Link className="nav-menu__sublink" to="/media">Media Kit</Link>
                <Link className="nav-menu__sublink" to="/terms">Terms of Use</Link>
              </div>
            </div>
          </li>
          <li className="nav-menu__li">
            <div>
              <div className="nav-menu__customer-support">Customer Support</div>
              <div><Link to="/" className="nav-menu__contact">contact@alchemist.com</Link></div>
            </div>
            <div className="nav-menu__copyright">
              <div>@AbbottNYC 2016</div>
              <div>
                Site by <Link to="/" className="nav-menu__contact">Alchemist</Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavMenu;
