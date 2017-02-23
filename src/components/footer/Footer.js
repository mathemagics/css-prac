import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.scss';
import '../../assets/font-awesome/scss/font-awesome.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__section">
          <div className="footer__links">
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/media">Media Kit</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
          <div className="footer__copyright">
            ©2015 AbbottNYC
          </div>
        </div>
        <div className="footer__section">
          <input />
          <div className="footer__row">
            <div className="footer__socialMedia">
              <i className="icon-camera-retro" /> camera
            </div>
            <div className="footer__author">
              Site by <Link to="alchemist">Alchemist</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
