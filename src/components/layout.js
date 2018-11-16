import React from "react"
import Header from './header'
import Footer from './footer'

import './theme.css'

export default props => (
  <div>
    <Header />
    <div className={'pageContainer ' + (props.containerClassName ? props.containerClassName : '')}>
      {props.children}
    </div>
    <Footer />
  </div>
)
