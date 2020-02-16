import React from "react"
import { graphql, Link } from "gatsby"

const singleTag = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <div>
      <div>Posts About {`${tagName}`}</div>

      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default singleTag
