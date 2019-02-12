import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Link to="/contact/"></Link>
      </Layout>
    );
  }
}


export default Index;

