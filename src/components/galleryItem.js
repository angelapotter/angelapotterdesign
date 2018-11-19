import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import galleryItemStyles from './galleryItem.module.css'

export default props => (
  <Link to={'/' + props.slug} key={props.slug} className={galleryItemStyles.item}>
    <div className={galleryItemStyles.imageContainer}>
      <Img
        className={galleryItemStyles.image}
        fluid={props.fluid}
        alt={props.title} />
    </div>
    <div className={galleryItemStyles.name}>
      {props.title}
    </div>
  </Link>
)
