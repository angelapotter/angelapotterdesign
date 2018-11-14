import React from "react"
import GalleryItem from "./galleryItem"

export default props => {
  return(
  <div>
    {props.projects.map((project) => (
      <GalleryItem project={project.node} />
    ))}

  </div>
)}
