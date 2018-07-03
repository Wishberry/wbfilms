import React from 'react'
import Link from 'gatsby-link'

import corner from '../images/corner.png';

const Frame = ({ children }) => (
  <div className="frame">
    <img className="corner top-left" src={corner} alt="corner" />
    <img className="corner top-right" src={corner} alt="corner" />
    <img className="corner bottom-left" src={corner} alt="corner" />
    <img className="corner bottom-right" src={corner} alt="corner" />
    <div className="rec"></div>
    {children}
  </div>
)

export default Frame;
