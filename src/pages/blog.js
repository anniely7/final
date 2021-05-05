import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => (
  <Layout>
    <Seo title="Blog" />
    <h1>Blog</h1>
    <p>ferfkjerfb rhjebfjerbf erhbfejfb erjhbfejhbfe</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
