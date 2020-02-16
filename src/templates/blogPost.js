import React from "react"
import { graphql, Link } from "gatsby"

const blogPost = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <div>
      <h1 style={{ fontFamily: "avenir" }}>{title}</h1>
      <div
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{
          fontFamily: "avenir",
        }}
      />
      {prev && (
        <Link
          style={{ margin: 15, fontFamily: "avenir" }}
          to={prev.frontmatter.path}
        >
          Prev
        </Link>
      )}

      {next && (
        <Link
          style={{ margin: 15, fontFamily: "avenir" }}
          to={next.frontmatter.path}
        >
          Next
        </Link>
      )}
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default blogPost
