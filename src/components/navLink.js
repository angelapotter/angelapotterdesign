import React from "react"
import { Link } from "gatsby"
import navLinkStyles from './navLink.module.css'

export default props => (
  <Link to={props.to} className={navLinkStyles.link + ' ' + props.className} activeClassName={props.showActive ? navLinkStyles.active : ''}>
    {props.children}
  </Link>
)
