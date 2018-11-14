import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Gallery from "../components/gallery"

export default ({data}) => {
  console.log(data)
  return (
    <Layout>
      <h1>Work</h1>
      <Gallery projects={data.allIndexJson.edges} image={data.imageOne.childImageSharp.fluid} />
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
    imageOne: file(relativePath: { eq: "doubledutch-edit-app/cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
