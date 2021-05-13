import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useAuth0 } from "@auth0/auth0-react"

const Blog = () => {

  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

  const data = useStaticQuery(graphql`
  {
    allContentfulBlog(sort: {fields: publishedDate, order: DESC}) {
      edges {
        node {
          title
          author
          publishedDate(formatString: "MMMM Do, YYYY")
          slug
        }
      }
    }
  }
`)
  return (
    <Layout>
      {
        !isAuthenticated && (
          <div className="card medium center-align z-depth-4" style={{maxWidth:"400px", margin: "2.9rem auto 0", backgroundColor:"#607d8b", color:"white",}}>
        <div className="card-content">
          <h4>Authentication Needed Click to Login</h4>
        </div>
        <i class="large material-icons">account_circle</i>
        <div className="card-action">
        <button className="btn-large" onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      </div>
          
        )
      }
      {
        isAuthenticated && (
          <div>
            <Seo title="Blog" />
            <div>
              {data.allContentfulBlog.edges.map((post, i) => {
                return (
                  <div className="card-panel" key={i}>
                    <h4>{post.node.title}</h4>
                    <p style={{ fontWeight: 200, fontSize: "0.8rem" }}>Published {post.node.publishedDate}</p>
                    <p style={{ fontWeight: 300, fontSize: "0.9rem" }}>Written by {post.node.author}</p>
                    <Link to={`/blog/${post.node.slug}`}>Read More...</Link>
                  </div>
                )
              })}
            </div>
            <button onClick={() => logout()}>Sign-Out</button>
          </div>
        )
      }
    </Layout>
  )
}

export default Blog