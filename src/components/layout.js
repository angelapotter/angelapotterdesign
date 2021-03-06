import React from "react"
import Header from './header'
import Footer from './footer'

import ProjectHeader from './projectHeader'

import './theme.css'
import './project.css'
import './device-frames.scss'

export default props => (
  <div>
    { props.projectNav ? <ProjectHeader prev={props.prev} next={props.next} /> : <Header /> }
    <div className={'pageContainer ' + (props.containerClassName ? props.containerClassName : '')}>
      {props.children}
    </div>
    <Footer />
  </div>
)
