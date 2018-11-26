import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default ({data}) => (
  <Layout containerClassName='constrainWidth'>
    <Helmet>
      <title>404 | Angela Potter</title>
    </Helmet>

    <h1>404</h1>
    <p>Oops, this page can't be found. <Link to='/' className='textLink'>View all work</Link> to find a project.</p>
  </Layout>
)
