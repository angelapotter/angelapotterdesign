import React from "react"
import headerStyles from './header.module.css'
import NavLink from './navLink'

export default props => {
  return(
  <div className={headerStyles.header}>
    <NavLink to='/'>Back to Index</NavLink>
    <div>
      <NavLink to={props.prev} className={props.prev ? '' : headerStyles.disabledLink}>Prev</NavLink>,&nbsp;
      <NavLink to={props.next} className={props.next ? '' : headerStyles.disabledLink}>Next</NavLink>
    </div>
  </div>
)}
