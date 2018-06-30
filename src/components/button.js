import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/logo.png';

const Button = ({ children, size }) => (
  <button className="btn" style={{ fontSize: size }}>
    {children}
  </button>
)

export default Button
