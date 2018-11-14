import React from "react"
import GalleryItem from "./galleryItem"
import galleryStyles from './gallery.module.css'

export default props => (
  <div className={galleryStyles.gallery}>
    {props.projects.map((project) => (
      <GalleryItem
        key={project.node.slug}
        project={project.node}
        image={props.image} />
    ))}
  </div>
)
