import React from 'react'
import Link from 'gatsby-link'

const Section = ({ children, className, title }) => (
  <div className='section'>
    <h3>{title}</h3>
    <div className="separator"></div>
    {children}
  </div>
)

export default Section
