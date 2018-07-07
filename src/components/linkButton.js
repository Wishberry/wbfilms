import React from 'react'
import Link from 'gatsby-link'

const Button = ({ to="#", children, size }) => (
  <Link to={to} className="btn" style={{ fontSize: size }}>
    {children}
  </Link>
)

export default Button
