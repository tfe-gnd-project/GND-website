import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Thankyou extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="thankyou"/>
        <center>
          <div>
            <img style={{color: `blue`}} src="https://static.thenounproject.com/png/642224-200.png" alt="Community Service" height="200" width="200"/>
          </div>
          <h3 style={{fontFamily: 'sans-serif', color: `#0a2f6c`}}>Thank you for volunteering!</h3>
          <div style={{fontFamily: 'sans-serif', color: `#0a2f6c`}}>You should recieve a confirmation email shortly.</div>
        </center>
      </Layout>
    );
  }
}


export default Thankyou;

