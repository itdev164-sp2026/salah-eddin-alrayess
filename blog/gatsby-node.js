const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allContentfulBlogPost.nodes.forEach(node => {
    createPage({
      path: `/${node.slug}/`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
