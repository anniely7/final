/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { withPrefix, Link } from "gatsby"
import * as headerStyle from "../components/header.module.css"
import { Helmet } from "react-helmet"



import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Helmet>
        <link href={withPrefix('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css')} rel="stylesheet" type="text/css" />
        <link href={withPrefix('https://fonts.googleapis.com/icon?family=Material+Icons')} rel="stylesheet" type="text/css" />
        <script src={withPrefix('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js')} /> 
      </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} index="Home" blog="Blog" contact="Contact" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

      </div>
      <footer
        style={{
          background: `rgb(38, 54, 75)`,
          marginTop: `1.45rem`,
        }}
      >
        <div style={{
margin:'0 auto', maxWidth: 960,padding:'1.45rem 1.08rem 0 1.08rem', display:'flex'
        }}
        >
          <h6 >
            <Link to="/" className={headerStyle.link}>Home</Link>
          </h6>
          <h6 >
            <Link to="/blog" className={headerStyle.link}>Blog</Link>
          </h6>
          <h6 >
            <Link to="/contact" className={headerStyle.link}>Contact</Link>
          </h6>
        </div>


        <div style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem`,
          color: 'white',
        }}
        >
          © 2021 Attractions in Dallas
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
