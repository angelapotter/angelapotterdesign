import React from "react"
import Img from "gatsby-image"

import projectIntroStyles from '../components/projectIntro.module.css'

export default props => (
  <div>
    <h1>{props.title}</h1>
    <div className='subhead'>{props.subhead}</div>

    <Img
      className={projectIntroStyles.sampleImage}
      fluid={props.fluid} />
  </div>
)
