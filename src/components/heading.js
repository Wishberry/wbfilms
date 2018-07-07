import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div
      style={{
        height: '80%',
        width: 'auto',
        position: 'relative',
      }}
    >
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
    </div>
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
