import React from "react"
import headerStyles from './header.module.css'
import NavLink from './navLink'

export default props => (
  <div className={headerStyles.header}>
    <NavLink to='/'>Angela Potter</NavLink>
    <div>
      <NavLink to='/' activeClassName={headerStyles.activeLink}>Work</NavLink>,&nbsp;
      <NavLink to='/about' activeClassName={headerStyles.activeLink}>About</NavLink>,&nbsp;
      <NavLink to='/resume' activeClassName={headerStyles.activeLink}>Resume</NavLink>
    </div>
  </div>
)
