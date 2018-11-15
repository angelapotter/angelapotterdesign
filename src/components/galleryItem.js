import React from "react"
import Img from "gatsby-image"

import galleryItemStyles from './galleryItem.module.css'

export default props => (
  <div key={props.project.slug}>
    <Img fluid={props.image.node.childImageSharp.fluid} />
    <div class={galleryItemStyles.name}>
      {props.project.name}
    </div>
  </div>
)
