import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/logo-white.png';

import soon from '../images/soon.png';

import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';
import twitter from '../images/twitter.png';

const Footer = ({ siteTitle }) => (
  <div>
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-nav">
          <Link to="/about" className="footer-nav-link">About Us</Link>
          <a href="https://www.wishberry.in/" className="footer-nav-link">Wishberry.in</a>
          <Link to="/submit" className="footer-nav-link">Submit Film</Link>
          <Link to="/privacy-policy" className="footer-nav-link">Privacy Policy</Link>
        </div>
        <div className="footer-nav">
          {/* <Link disabled to="/" className="footer-nav-link disabled">Films</Link>
          <Link disabled to="/" className="footer-nav-link disabled">Investor Corner</Link>
          <Link disabled to="/" className="footer-nav-link disabled">Press</Link>
          <Link disabled to="/" className="footer-nav-link disabled">FAQs</Link> */}
          <div className="footer-nav-link disabled">Films</div>
          <div className="footer-nav-link disabled">Investor Corner</div>
          <div className="footer-nav-link disabled">Press</div>
          <div className="footer-nav-link disabled">FAQs</div>
          {/* <div className="footer-nav-title">
          </div> */}
          <div className="footer-nav-banner">
            <img src={soon} alt="coming soon" />
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-divider"></div>
          <div className="footer-contact-us">
            <div className="footer-nav-title">
              Contact Us
            </div>
            <span>102/103 Matharu Arcade, Subhash road,</span>
            <span>Vile Parle (E), Mumbai 400057</span>
            <span>info@wishberry.in | +9122-49426200</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-info">
          <div className="info">
            &copy;2016 All Rights Reserved Wishberry Online Services Pvt. Ltd. (CIN: U74300MH2009PTC191803)
          </div>
        </div>
        <div className="footer-social">
          {/* <a className="footer-social-link">
            <img src={facebook} alt="facebook" />
          </a>
          <a className="footer-social-link">
            <img src={instagram} alt="facebook" />
          </a>
          <a className="footer-social-link">
            <img src={youtube} alt="facebook" />
          </a>
          <a className="footer-social-link">
            <img src={twitter} alt="facebook" />
          </a> */}
        </div>
      </div>
    </div>
    <div className="footer-mobile">
      <div className="footer-mobile-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-nav-mobile">
        <Link to="/about" className="footer-nav-link-mobile">About Us</Link>
        <a href="https://www.wishberry.in/" className="footer-nav-link-mobile">Wishberry.in</a>
        <Link to="/submit" className="footer-nav-link-mobile">Submit Film</Link>
        <Link to="/privacy-policy" className="footer-nav-link-mobile">Privacy Policy</Link>
      </div>
      <div className="footer-nav-mobile">
        {/* <Link disabled to="/" className="footer-nav-link-mobile disabled">Films</Link>
        <Link disabled to="/" className="footer-nav-link-mobile disabled">Investor Corner</Link>
        <Link disabled to="/" className="footer-nav-link-mobile disabled">Press</Link>
        <Link disabled to="/" className="footer-nav-link-mobile disabled">FAQs</Link> */}
        <div className="footer-nav-link-mobile disabled">Films</div>
        <div className="footer-nav-link-mobile disabled">Investor Corner</div>
        <div className="footer-nav-link-mobile disabled">Press</div>
        <div className="footer-nav-link-mobile disabled">FAQs</div>
        <div className="footer-nav-banner">
          <img src={soon} alt="coming soon" />
        </div>
      </div>
      <div className="footer-contact">
        <div className="footer-divider"></div>
        <div className="footer-contact-us">
          <div className="footer-nav-title">
            Contact Us
          </div>
          <span>102/103 Matharu Arcade, Subhash road,</span>
          <span>Vile Parle (E), Mumbai 400057</span>
          <span>info@wishberry.in | +9122-49426200</span>
        </div>
      </div>
      <div className="footer-mobile-info">
        &copy;2016 All Rights Reserved Wishberry Online Services Pvt. Ltd.<br/>(CIN: U74300MH2009PTC191803)
      </div>
      {/* <div className="footer-mobile-social">
        <a className="footer-social-link">
          <img src={facebook} alt="facebook" />
        </a>
        <a className="footer-social-link">
          <img src={instagram} alt="facebook" />
        </a>
        <a className="footer-social-link">
          <img src={youtube} alt="facebook" />
        </a>
        <a className="footer-social-link">
          <img src={twitter} alt="facebook" />
        </a>
      </div> */}
    </div>
  </div>
)

export default Footer
