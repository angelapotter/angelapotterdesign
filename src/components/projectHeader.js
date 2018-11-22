import React from "react"
import headerStyles from './header.module.css'
import NavLink from './navLink'

export default props => {
  return(
  <div className={headerStyles.header}>
    <NavLink to='/'>Back to Index</NavLink>
    <div>
      <NavLink
        to={props.prev}
        disabled={props.prev ? false : true}>
        Prev
      </NavLink>,&nbsp;
      <NavLink
        to={props.next}
        disabled={props.next ? false : true}>
        Next
      </NavLink>
    </div>
  </div>
)}
