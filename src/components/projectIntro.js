import React from "react"
import projectIntroStyles from '../components/projectIntro.module.css'

export default props => (
  <div>
    <h1>{props.title}</h1>
    <div className='subhead'>{props.subhead}</div>
    <p className={projectIntroStyles.metaData}>{props.company}, {props.role}, {props.date}</p>
  </div>
)
