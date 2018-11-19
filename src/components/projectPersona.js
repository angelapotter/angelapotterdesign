import React from "react"
import Img from "gatsby-image"

export default props => (
  <div>
    <img
      src={props.fixed}
      alt={props.name} />
    <h3>{props.name}</h3>

    <div>
      {props.children}
    </div>
  </div>
)
