import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
    return(
  <Layout>
    <Seo title="Contact" />
    <h1>Hi from the contact page</h1>
    <p>Welcome to contact</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
    )
    }

export default Contact
