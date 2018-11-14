import React from "react"
import GalleryItem from "./galleryItem"

export default props => (
  <div>
    {props.projects.map((project) => (
      <GalleryItem key={project.node.slug} project={project.node} image={props.image} />
    ))}
  </div>
)
