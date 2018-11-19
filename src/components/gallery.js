import React from "react"
import GalleryItem from "./galleryItem"
import galleryStyles from './gallery.module.css'

export default props =>  {

  const imageFromSlug = ( images, slug ) => {
    return images.find(function(image) {
      return image.node.relativeDirectory === slug;
    })
  }

  const fluidFromSlug = ( images, slug ) => {
    return imageFromSlug(images, slug).node.childImageSharp.fluid;
  }

  return(
  <div className={galleryStyles.gallery}>
    {props.projects.map((project) => (
      <GalleryItem
        slug={project.node.frontmatter.slug}
        title={project.node.frontmatter.title}
        fluid={fluidFromSlug(props.images, project.node.frontmatter.slug)} />
    ))}
  </div>
)}
