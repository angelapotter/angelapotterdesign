import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from "rehype-react"

import Layout from '../components/layout'
import ProjectIntro from '../components/projectIntro'

// for the case study
import ProjectPersona from '../components/projectPersona'
import Grid from '../components/grid'

export default props => {

  const imageFromName = ( images,name ) => {
    return images.find(function(image) {
      return image.node.name === name;
    })
  }

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'grid': Grid ,
      'project-persona': ProjectPersona
    }
  }).Compiler

  const project = props.data.project
  const images = props.data.projectImages.edges

  return (
    <Layout containerClassName='constrainWidth'>
      <ProjectIntro
        title={project.name}
        subhead={project.blurb} />

      <div
        className='content'>
        {
          renderAst(props.data.caseStudy.childMarkdownRemark.htmlAst)
        }
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
    projectImages: allFile(filter: { relativeDirectory: {eq: $slug} }) {
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
    caseStudy: file(relativeDirectory: {eq: "projects/kelvin-control-models"}, name: {eq: "case-study"}) {
      childMarkdownRemark {
        htmlAst
      }
    }
  }
`
