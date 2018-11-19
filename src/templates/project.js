import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from "rehype-react"

import Layout from '../components/layout'
import ProjectIntro from '../components/projectIntro'

// for the case study
import Grid from '../components/grid'

export default props => {

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'grid': Grid
    }
  }).Compiler

  const project = props.data.project

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
      company
      role
      platform
    }
    caseStudy: file(relativeDirectory: {eq: $slug}, name: {eq: "case-study"}) {
      childMarkdownRemark {
        htmlAst
      }
    }
  }
`
