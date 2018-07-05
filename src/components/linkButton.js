import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/logo.png';

const Button = ({ to="#", children, size }) => (
  <Link to={to} className="btn" style={{ fontSize: size }}>
    {children}
  </Link>
)

export default Button
