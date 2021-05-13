import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as headerStyle from "../components/header.module.css"


const Header = ({ siteTitle, index, contact, blog }) => (
<>
  <header className={headerStyle.headerimage}>


 
      <h1 style={{ margin: "0 0 0 0.9rem", padding:"auto"}}>
        <Link to="/" style={{color:"white"}} className={headerStyle.center}>
          {siteTitle}
        </Link>
      </h1>          
  </header>



      <div style={{margin:'0 auto', padding:'1.45rem 1.08rem', display:'flex', justifyContent: "space-evenly",
background: `rgb(38, 54, 75)`}}>
      <h6>
        <Link to="/" className={headerStyle.link}>{index}</Link>
      </h6>
      <h6>
        <Link to="/blog" className={headerStyle.link}>{blog}</Link>
      </h6>
      <h6>
        <Link to="/contact" className={headerStyle.link}>{contact}</Link>
      </h6>
  </div>
  </>
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
