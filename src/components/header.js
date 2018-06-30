import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/logo.png';

const Header = ({ siteTitle }) => (
  <div className="header">
    <Link to="/" style={{ height: '100%' }}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </Link>
    <div className='header-nav'>
      <Link className="header-link" activeClassName="header-link-active" to="/about">
        About Us
      </Link>
      <Link className="header-link" activeClassName="header-link-active" to="/films">
        Films
      </Link>
      <Link className="header-link" activeClassName="header-link-active" to="/investor">
        Investor Corner
      </Link>
      <Link className="header-link" activeClassName="header-link-active" to="/services">
        Services
      </Link>
    </div>
  </div>
)

export default Header
