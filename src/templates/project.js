import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ProjectIntro from '../components/projectIntro'

export default props => {
  console.log(props);

  const imageFromName = ( images,name ) => {
    return images.find(function(image) {
      return image.node.name === name;
    })
  }

  return (
    <Layout containerClassName='constrainWidth'>
      <ProjectIntro
        title='Control Model Parameters'
        subhead='Empower analysts to tune control models for natural gas wells' />

      <div className='content'>
        {props.children}
      </div>
    </Layout>
  )
}
