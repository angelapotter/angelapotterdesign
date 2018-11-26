const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve(`src/templates/project.js`)

  return graphql(`
    query {
      allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const projects = result.data.allMarkdownRemark.edges

    projects.forEach(({node}, index) => {
      createPage({
        path: node.frontmatter.slug,
        component: projectTemplate,
        context: {
          slug: node.frontmatter.slug,
          prev: index === 0 ? '' : projects[index - 1].node.frontmatter.slug,
          next: index === (projects.length - 1) ? '' : projects[index + 1].node.frontmatter.slug,
        },
      })
    })
  })
}
