import React from "react"
import Header from './header'
import './theme.css'
import layoutStyles from './layout.module.css'

export default ({children}) => (
  <div>
    <Header />
    <div className={layoutStyles.container}>
      {children}
    </div>
  </div>
)
