import React from "react"
import Img from "gatsby-image"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import aboutStyles from '../components/about.module.css'

export default ({data}) => (
  <Layout containerClassName='constrainWidth'>
    <h1>Hi, I'm Angela</h1>
    <p className='subhead'>A full-stack product designer in San Francisco</p>

    <Img
      className={aboutStyles.profileImage}
      fluid={data.file.childImageSharp.fluid}
      alt='Angela Potter' />

    <div className='content'>

      <h2>What motivates me</h2>
      <p>I love removing friction from people’s lives so they can focus on their passions.</p>
      <p>People have a limited supply of cognitive resources. They should spend these resources on the things they care about, not figuring out how to use software.</p>

      <h2>What I do</h2>
      <p>I take design from ideation through implementation. I use a combination of quantitative and qualitative data to solve problems and reach business goals. When I talk to users, I dig deep to uncover their true needs and goals.</p>
      <p>I think big but start small. I’m always weighing tradeoffs of delivering immediate value while moving toward the long-term vision.</p>
      <p>I used to do front-end development and love working with engineers. Undestanding technical constraints is a big part of the job. I work best when I’m rapidly iterating with a small cross-functional team.</p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(name: { eq: "about" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

