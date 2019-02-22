import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grow from '@material-ui/core/Grow';


class Index extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`GND`]} />
        <Grow
            in="true"
            style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: 1000 } : {})}
        >
            <div>Welcome to our home page! Visit our Start Serving, Contact, and Donate page!</div>
        </Grow>
      </Layout>
    );
  }
}


export default Index;

