import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Handshake from "../images/donation-hand2.png"

class Thankyou extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="thankyou"/>
        <center>
        <div>
        <img style={{color: `blue`}} src={Handshake} alt="Handshake" height="200" width="200"/>
        </div>
        <p style={{color: `#0a2f6c`}}>Thank you for your donation!</p>
        </center>
      </Layout>
    );
  }
}


export default Thankyou;

