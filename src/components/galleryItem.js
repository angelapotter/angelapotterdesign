import React from "react"
import Img from "gatsby-image"

export default props => (
  <div key={props.project.slug}>
    {props.project.name}
    <Img fluid={props.image} />
  </div>
)
