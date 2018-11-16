import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import ProjectPersona from "../components/projectPersona"
import ProjectIntro from "../components/projectIntro"
import Grid from "../components/grid"
import projectStyles from '../components/project.module.css'

export default ({data}) => {

  const imageFromName = ( images,name ) => {
    return images.find(function(image) {
      return image.node.name === name;
    })
  }

  const fluidFromName = (images, name) => {
    return imageFromName(images.edges, name).node.childImageSharp.fluid;
  }

  return (
  <Layout containerClassName='constrainWidth'>
    <ProjectIntro
      title='Control Model Parameters'
      subhead='Empower analysts to tune control models for natural gas wells'
      fluid={imageFromName(data.projectImages.edges, 'sample').node.childImageSharp.fluid} />

    <div className='content'>
      <h2>Context</h2>
      <p>I’ll start by describing some key concepts:</p>

      <ol>
        <li>Plunger lifts are used in natural gas wells to increase production.</li>
        <li>Kelvin has sensors on each well that detect gas flow, pressure, vibrations, and other data.</li>
        <li>The Kelvin data science team writes control models that optimize production by controlling plunger cycles.</li>
      </ol>

      <h2>The Kelvin Application</h2>
      <p>Before this project began, the Kelvin app was a monitoring and ticketing system for oil and gas. We supported 3 main personas for our clients:</p>

      <Grid>

        <ProjectPersona
          fixed={imageFromName(data.avatars.edges, 'pumper-avatar').node.childImageSharp.fixed}
          name='Pumper'>
          <p>Creates daily reports for ~<strong>30 wells</strong> based on what he sees in the field</p>
          <p>Performs routine well maintenance, adjusts new wells and recommends <strong>equipment changes</strong></p>
          <p>Cares about identifying issues early</p>
        </ProjectPersona>

        <ProjectPersona
          fixed={imageFromName(data.avatars.edges, 'optimizer-avatar').node.childImageSharp.fixed}
          name='Optimizer'>
          <p>Diagnoses systemic defects for ~<strong>300 wells</strong> based on analysis of charts & logs</p>
          <p>Adjusts valve <strong>open/close criteria</strong> and recommends equipment changes</p>
          <p>Cares about deviation from expected production</p>
        </ProjectPersona>

        <ProjectPersona
          fixed={imageFromName(data.avatars.edges, 'optimization-lead-avatar').node.childImageSharp.fixed}
          name='Optimization Lead'>
          <p>Oversees a team of 5-10 optimizers</p>
          <p>Calculates <strong>ROI</strong> by comparing production, touchpoints, & equipment costs</p>
          <p>Cares about the success of the Kelvin pilot</p>
        </ProjectPersona>

      </Grid>

      <h2>Building a Control Platform</h2>

      <p>We needed to make a pivot in order to scale as a company:</p>

      <ul>
        <li>Monitoring's nice, but clients want automation</li>
        <li>Our existing control models are custom made. We spend a ton of internal resources building and tweaking them.</li>
        <li>We don’t want to be tied to the oil & gas industry</li>
        <li>Eventually, we want to empower clients to manage their own control models. As a first step, we need to make this process easier for our internal team.</li>
      </ul>

      <p>This was an ambitious set of goals. The design team's biggest initial questions we had were:</p>

      <ul>
        <li>How do we add immediate value, while moving toward our longterm goal?</li>
        <li>What control models do we have now and what do they actually do?</li>
        <li>What users and use cases should we focus on?</li>
        <li>How does our data team manage models today?</li>
      </ul>

      <h2>User Research</h2>

      <Grid>
        <Img
          style={{gridColumn: 'span 2'}}
          fluid={imageFromName(data.projectImages.edges, 'data-interviews').node.childImageSharp.fluid} />
        <p class='subhead'>We interviewed 8 data team members to better understand their workflow.</p>
      </Grid>

      <p>When we started, we didn't know a lot about <strong>how control models work</strong> on our team. These were our takeaways:</p>

      <ul>
        <li>Control models are independent blocks of code that <strong>react</strong> when a well is not running optimally. They make changes in response to certain <strong>thresholds</strong> in our sensor data.</li>
        <li>Thresholds and responses can be tuned according to the needs of individual wells through configurable model <strong>parameters</strong>.</li>
        <li>Models are <strong>semi-automated</strong>: when they’re applied to new wells, there is a period of manually tweaking parameters before they can run on their own.</li>
      </ul>

      <h2>The Target User</h2>

      <p>Initially we thought the target user was a "member of the data science team." When we dug in we realized that we needed to get more specific than that.</p>

      <ul>
        <li>The data team is comprised of a <strong>wide variety of user types</strong> with different workflows and areas of expertise.</li>
        <li>Two data team members are <strong>former optimizers</strong> at energy companies. They have deep domain knowledge but they don't code.</li>
        <li>They find model performance issues and recommend changes. They know what needs to change, but <strong>don’t have the tools</strong> to make those changes.</li>
      </ul>

      <p>Based on this, we decided to focus on those data team members, and defined them as a new persona:</p>

      <ProjectPersona
        fixed={imageFromName(data.avatars.edges, 'super-optimizer-avatar').node.childImageSharp.fixed}
        name='Super Optimizer'>
        <p>Currently a <strong>Kelvin data team member</strong>, but a role that we expect clients to have in the future; replaces several optimizers</p>
        <p>Has domain expertise and understands the basics of control models; does not code</p>
        <p>Diagnoses and adjusts control model parameters; could write simple if-then models from scratch</p>
        <p>Cares about control model adaptability</p>
      </ProjectPersona>

      <p>We identifed several key user needs that we could address as part of this project. Super-optimizers want to:</p>

      <ul>
        <li>Enable control models on new wells and tune them to work for new environments, equipment, and client needs.</li>
        <li>Easily see whether a model is performing optimally on a given well, and diagnose issues.</li>
        <li>Give clients transparency into how successfully models are running and what changes are being made.</li>
      </ul>

      <h2>Exploring App Architecture</h2>

      <Img fluid={fluidFromName(data.projectImages, 'architecture-diagrams')} />
      <p>I created some diagrams to show how models could <strong>fit into our existing application</strong>. Though most of this was scoped out for V1, on a high level I wanted to make sure we were setting ourselves up for future iterations.</p>

      <h2>Model Content</h2>

      <Grid>

        <div>
          <p>A big piece of this project was determining what actually needed to be shown and edited for our control models. It was a long process of interviews and information-gathering sessions with the data team to figure out:</p>
          <li>How do users tell if a model is running suboptimally?</li>
          <li>What parameters exist on each model, and how much should we show to users?</li>
          <li>What context do users need to actually change a model parameter?</li>
        </div>

        <Img fluid={fluidFromName(data.projectImages, 'model-content')} />

      </Grid>

    </div>
  </Layout>
)}

export const query = graphql`
  query {
    projectImages: allFile(filter: { relativeDirectory: { eq: "kelvin-control-models" } }) {
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
    avatars: allFile(filter: { relativeDirectory: { eq: "kelvin-control-models/avatars" } }) {
      edges {
         node {
          name
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
