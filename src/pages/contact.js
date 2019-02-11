import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {

  render() {
    return (
      <Layout >
        <SEO title="Contact Us" />
        <Link to="/contact/">Contact Page</Link>
      </Layout>
    );
  }
}


export default Contact;