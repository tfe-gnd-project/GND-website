import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`GND`]} />
        <div>Home</div>
      </Layout>
    );
  }
}


export default Index;

