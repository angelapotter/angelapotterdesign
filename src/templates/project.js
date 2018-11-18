import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ProjectIntro from '../components/projectIntro'

export default props => {

  const imageFromName = ( images,name ) => {
    return images.find(function(image) {
      return image.node.name === name;
    })
  }

  const project = props.data.project
  const images = props.data.projectImages.edges

  return (
    <Layout containerClassName='constrainWidth'>
      <ProjectIntro
        title={project.name}
        subhead={project.blurb}
        fluid={imageFromName(images, 'sample').node.childImageSharp.fluid} />

      <div className='content'>
        {props.children}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: indexJson(slug: {eq: $slug} ) {
      slug
      name
      blurb
      show_case_study
      company
      role
      platform
    }
    projectImages: allFile(filter: { relativeDirectory: { eq: $slug } }) {
      edges {
         node {
          name
          childImageSharp {
            fluid(maxWidth: 2880) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
