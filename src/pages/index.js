import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as headerStyle from "../components/header.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to my Blog!</h1>
    <p>Hi my name is Annie! This blog is about great places to visit in the northern part of Dallas. There will be places like restaurants, fun activities, parks, malls, etc.</p>

    <div className="row">
    <div class="col s12 m6">
      <div class="card-image" style={{position:"relative"}}>
          <StaticImage src="../images/andretti.jpeg" width={450} height={450} alt="Andretti" />
          <h3 className={headerStyle.center}>Andretti</h3>
      </div>
    </div>
 

    <div class="col s12 m6">
        <div class="card-image" style={{position:"relative"}}>
          <StaticImage src="../images/ally.jpeg" width={450} height={450} alt="Dallas Alley" />
          <h3 className={headerStyle.center}>Dallas Alley</h3>
        </div>
    </div>

    <div class="col s12 m6">
        <div class="card-image" style={{position:"relative"}}>
          <StaticImage src="../images/aboretum.jpeg" width={450} height={450} alt="Dallas Aboretum during christmas" />
          <h3 className={headerStyle.center}>Dallas Aboretum</h3>
        </div>
    </div>    
    
    <div class="col s12 m6">
        <div class="card-image" style={{position:"relative"}}>
          <StaticImage src="../images/aquarium.jpeg" width={450} height={450} alt="Aquarium" />
          <h3 className={headerStyle.center}>Sea Life Aquarium</h3>
        </div>
    </div>

    <div class="col s12 m6">
        <div class="card-image" style={{position:"relative"}}>
          <StaticImage src="../images/nvm.jpeg" width={450} height={450} alt="National Videogame Museum" />
          <h3 className={headerStyle.center}>National Videogame Museum</h3>
        </div>
    </div>

    <div class="col s12 m6">
        <div class="card-image" style={{position:"relative"}}>
          <StaticImage src="../images/water.jpeg" width={450} height={450} alt="Water Garden" />
          <h3 className={headerStyle.center}>Water Garden</h3>
        </div>
    </div>

  </div>


  
    <p className="center-align">Have any suggestions or question? <Link to="/contact">Click Here</Link></p>
 
  </Layout>
)

export default IndexPage
