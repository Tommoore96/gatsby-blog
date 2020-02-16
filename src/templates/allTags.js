import React from "react"
import { graphql, Link } from "gatsby"

const allTags = ({ data, pageContext }) => {
  console.log("data: ", pageContext)

  return (
    <div>
      <div>
        {pageContext.tags.map(tag => (
          <Link to={`tags/${tag}`}>
            <h2>{tag}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default allTags
