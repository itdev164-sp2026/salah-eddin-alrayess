import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  if (!data || !data.contentfulBlogPost) {
    return <main>Post not found</main>
  }

  const post = data.contentfulBlogPost

  return (
    <main>
      <h1>{post.title}</h1>
    </main>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
    }
  }
`
