import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from "rehype-react"
import { Helmet } from "react-helmet"

import Layout from '../components/layout'
import ProjectIntro from '../components/projectIntro'

// for the case study
import Grid from '../components/grid'
import BrowserChrome from '../components/browserChrome'

export default props => {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'grid': Grid,
      'browser-chrome': BrowserChrome
    }
  }).Compiler

  const projectInfo = props.data.project.frontmatter

  return (
    <Layout containerClassName='constrainWidth' projectNav prev={props.pageContext.prev} next={props.pageContext.next}>
      <Helmet>
        <title>{projectInfo.title} | Angela Potter</title>
      </Helmet>

      <ProjectIntro
        title={projectInfo.title}
        subhead={projectInfo.blurb}
        company={projectInfo.company}
        role={projectInfo.role}
        date={projectInfo.date} />

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
    project: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        company
        role
        blurb
        date(formatString: "MMMM YYYY")
      }
    }
    caseStudy: file(relativeDirectory: {eq: $slug}, name: {eq: "case-study"}) {
      childMarkdownRemark {
        htmlAst
      }
    }
  }
`
