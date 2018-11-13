import React from "react"
import { Link } from "gatsby"

export default ({children}) => (
  <div>
    <div>
      <Link to='/'>Work</Link>
      <Link to='/about'>About</Link>
      <Link to='/resume'>Resume</Link>
    </div>
    <div>
      {children}
    </div>
  </div>
)
