import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import galleryItemStyles from './galleryItem.module.css'

export default props => (
  <Link to='/project' key={props.project.slug} className={galleryItemStyles.item}>
    <div className={galleryItemStyles.imageContainer}>
      <Img
        className={galleryItemStyles.image}
        fluid={props.image.node.childImageSharp.fluid}
        alt={props.project.name} />
    </div>
    <div className={galleryItemStyles.name}>
      {props.project.name}
    </div>
  </Link>
)
