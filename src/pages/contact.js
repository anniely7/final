import React, { useState } from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
  }
    return(
  <Layout>
    <Seo title="Contact" />
      <h4 className="center-align">Contact Us</h4>
      <p className="center-align" style={{fontSize:"small"}}>* Indicates required field</p>

      <form className="col s12 container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input id="first_name" type="text" className="validate" required />
            <label for="first_name">First Name *</label>
          </div>
          
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate"/>
            <label for="last_name">Last Name *</label>
          </div>
        </div>

        <div className="input-field">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate" />
          <label for="icon_telephone">Telephone</label>
        </div>

        <div className="input-field">
          <i className="material-icons prefix">email</i>
          <input id="email" type="email" className="validate" required/>
          <label for="email">Email *</label>
        </div>

        <div className="input-field">
          <i className="material-icons prefix">mode_edit</i>
          <textarea id="textarea1" className="materialize-textarea" required />
          <label for="textarea1">Comment *</label>
        </div>

        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
        </button> 
      </form>

      {submitting &&
        <h6 className="center-align">Thank you for your comments and concerns! We will get back to you in a timely manner!</h6>
      }
  </Layout>
    )
    }

export default Contact
