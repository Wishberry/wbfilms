import React from 'react'
import Link from 'gatsby-link'
import Tooltip from 'rc-tooltip'

import logo from '../images/logo.png';

const TooltipComponent = ({ children, text, caption }) => (
  <Tooltip
    placement="top"
    trigger={['click']}
    overlay={<span>{text}<br />- {caption}</span>}
    overlayClassName="team-quote"
    animation="fade"
  >
    {children}
  </Tooltip>
)

export default TooltipComponent
