import React from "react"
import headerStyles from './header.module.css'
import NavLink from './navLink'

export default props => (
  <div className={headerStyles.header}>
    <NavLink to='/'>Back to Index</NavLink>
    <div>
      {props.prev ? <NavLink to={props.prev} activeClassName={headerStyles.activeLink}>Prev</NavLink> : ''}
      {props.next ? <NavLink to={props.next} activeClassName={headerStyles.activeLink}>Next</NavLink> : ''}
    </div>
  </div>
)
