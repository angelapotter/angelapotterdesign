import React from "react"
import GalleryItem from "./galleryItem"
import galleryStyles from './gallery.module.css'

export default props =>  {

  const imageFromSlug = ( images,slug ) => {
    return images.find(function(image) {
      return image.node.relativeDirectory === slug;
    })
  }

  return(
  <div className={galleryStyles.gallery}>
    {props.projects.map((project) => (
      <GalleryItem
        key={project.node.slug}
        project={project.node}
        image={imageFromSlug(props.images, project.node.slug)} />
    ))}
  </div>
)}
