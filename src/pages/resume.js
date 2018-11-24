import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import resumeStyles from '../components/resume.module.css'

export default () => (
  <Layout containerClassName='constrainWidth'>
    <Helmet>
      <title>Resume | Angela Potter</title>
    </Helmet>

    <h1>Resume</h1>

    <div className={resumeStyles.content + ' content'}>

      <h2>Experience</h2>

      <div className={resumeStyles.company}>Kelvin</div>
      <div className={resumeStyles.role}>Product Designer, Nov 2017–present</div>
      <ul>
        <li>Led design on the first-ever Kelvin Control Model interface</li>
        <li>Designed data visualizations for beam pumps and naural gas wells</li>
        <li>Organized and ran design team planning meetings, retrospectives, and feedback sessions</li>
      </ul>

      <div className={resumeStyles.company}>DoubleDutch</div>
      <div className={resumeStyles.role}>Senior Product Designer, Feb 2017–Oct 2017</div>
      <ul>
        <li>Oversaw end-to-end design for all products</li>
        <li>Maintained and enforced style guides across web and mobile</li>
      </ul>

      <div className={resumeStyles.role}>Product Designer, May 2016–Feb 2017</div>
      <ul>
        <li>Designed all CMS and event reporting products</li>
        <li>Enabled self-service for 50% of customers with a CMS onboarding wizard</li>
        <li>Created the company’s first web styleguide</li>
      </ul>

      <div className={resumeStyles.company}>Goldbelly</div>
      <div className={resumeStyles.role}>UX Designer, Jun 2014–Apr 2016</div>
      <ul>
        <li>Reduced support tickets by improving the order scheduling and tracking experience</li>
        <li>Implemented designs in HAML/SASS and CoffeeScript</li>
      </ul>

      <div className={resumeStyles.company}>OLSET</div>
      <div className={resumeStyles.role}>UX Designer and Developer, Jul 2013–Jun 2014</div>
      <ul>
        <li>Sole designer and front-end developer</li>
      </ul>

      <h2>Education</h2>

      <div className={resumeStyles.company}>Northwestern University</div>
      <div className={resumeStyles.role}>Bachelor of Music in Music Cognition and Flute Performance, Jun 2012, Evanston, IL</div>

      <h2>Skills and Tools</h2>
      <div className={resumeStyles.role}>UX design, product management, user research, information architecture, UI design</div>
      <div className={resumeStyles.role}>Sketch, Invision, Balsamiq, HTML/CSS</div>
    </div>


  </Layout>
)
