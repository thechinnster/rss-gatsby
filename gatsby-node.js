const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allFeedGatsbyBlog {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  result.data.allFeedGatsbyBlog.edges.forEach(({ node }) => {
    createPage({
      path: node.title,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.title,
      },
    })
  })
}
