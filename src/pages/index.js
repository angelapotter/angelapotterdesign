import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Gallery from "../components/gallery"

export default ({data}) => {
  console.log(data)
  return (
    <Layout>
      <h1>Work</h1>
      <Gallery projects={data.allIndexJson.edges} images={data.coverImages.edges} />
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
    coverImages: allFile(filter: { extension: {eq: "jpg"}, name: { eq: "cover" } }) {
      edges {
         node {
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
