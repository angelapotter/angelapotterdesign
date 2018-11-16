import React from "react"
import gridStyles from './grid.module.css'

export default props => {
  return(
  <div
    className={gridStyles.grid + ' ' + (props.className ? props.className : '')}
    style={props.style}>
    {props.children}
  </div>
)}
