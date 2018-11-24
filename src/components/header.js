import React from "react"
import headerStyles from './header.module.css'
import NavLink from './navLink'

export default props => (
  <div className={headerStyles.header}>
    <NavLink to='/' className='logo'>Angela Potter</NavLink>
    <div>
      <NavLink to='/' showActive>Work</NavLink>,&nbsp;
      <NavLink to='/about' showActive>About</NavLink>,&nbsp;
      <NavLink to='/resume' showActive>Resume</NavLink>
    </div>
  </div>
)
