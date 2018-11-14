import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Gallery from "../components/gallery"

export default ({data}) => {
  return (
    <Layout>
      <h1>Work</h1>
      <Gallery projects={data.allIndexJson.edges}/>
    </Layout>
  )
}

export const query = graphql`
  query {
    allIndexJson {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
