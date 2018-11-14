import React from "react"

export default props => (
  <div key={props.project.slug}>
    {props.project.name}
  </div>
)
