import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as headerStyle from "../components/header.module.css"

const Header = ({ siteTitle, siteDescription, index, contact, blog }) => (
  <header
    style={{
      background: `rgb(38, 54, 75)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: "0 0 0 0.9rem" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>          
      <h3 style={{color:'rbg(154, 70, 163)', margin:'0 0 0 0.9rem'}}>{siteDescription}</h3>
      <div style={{margin:'0 auto', maxWidth: 960, padding:'1.45rem 1.08rem', display:'flex'}}>
          <h4 style={{marginRight:'0.9rem'}}>
            <Link to="/" className={headerStyle.link}>{index}</Link>
          </h4>
          <h4 style={{marginRight:'0.9rem'}}>
            <Link to="/blog" className={headerStyle.link}>{blog}</Link>
          </h4>
          <h4 style={{marginRight:'0.9rem'}}>
            <Link to="/contact" className={headerStyle.link}>{contact}</Link>
          </h4>
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  index: PropTypes.string,
  blog: PropTypes.string,
  contact: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
