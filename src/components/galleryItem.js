import React from "react"
import Img from "gatsby-image"

export default props => (
  <div key={props.project.slug}>
    <Img fluid={props.image.node.childImageSharp.fluid} />
    {props.project.name}
  </div>
)
