import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Gallery from "../components/gallery"

export default ({data}) => (
  <Layout>
    <Helmet>
      <title>Work | Angela Potter</title>
    </Helmet>

    <h1>Work</h1>
    <Gallery projects={data.projects.edges} images={data.coverImages.edges} />
  </Layout>
)

export const query = graphql`
  query {
    projects: allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
    coverImages: allFile(filter: { name: { eq: "cover" } }) {
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
