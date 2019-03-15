import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitlebarGridList from '../components/photos/gridlist'

class Photos extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="Photos"/>
        <TitlebarGridList />
      </Layout>
    );
  }
}


export default Photos;

