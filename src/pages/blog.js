import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulBlog(sort: {fields: publishedDate, order: DESC}) {
      edges {
        node {
          title
          author
          publishedDate(fromNow: true)
          slug
        }
      }
    }
  }
`)
  return(
  <Layout>
    <Seo title="Blog" />
    <h1>Blog</h1>
    <div>
      {data.allContentfulBlog.edges.map((post,i) => {
        return(
          <div key={i}>
            <h2>{post.node.title}</h2>
            <p style={{fontWeight:200, fontSize:"0.8rem"}}>Published {post.node.publishedDate}</p>
            <p style={{fontWeight:300, fontSize:"0.9rem"}}>Written by {post.node.author}</p>
            <Link to={`/blog/${post.node.slug}`}>Read More...</Link>
            <hr style={{height:"3px"}}/>
          </div>
        )
      })}
    </div>
  </Layout>
  ) 
}

export default Blog