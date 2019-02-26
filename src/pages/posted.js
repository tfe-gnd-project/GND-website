import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Submit from "../images/submittediconedit.png"

class Thankyou extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="posted"/>
        <center>
        <div>
        <img style={{color: `blue`}} src={Submit} alt="Question Posted" height="200" width="200"/>
        </div>
        <p style={{color: `#0a2f6c`}}>Thank you for your question!</p>
        <p style={{color: `#0a2f6c`, fontSize: 30}}>We will contact you shortly.</p>
        </center>
      </Layout>
    );
  }
}


export default Thankyou;

