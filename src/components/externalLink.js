import React from "react"

export default props => (
  <a
    className='textLink'
    href={props.href}
    target='_blank'
    rel='noopener noreferrer'>
    {props.children}
  </a>
)
