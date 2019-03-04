import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import axios from 'axios';


class Admin extends React.Component {


  addNewsletter = () => {


    axios.post(`http://localhost:8080//apps/NewPage/NewForm/addNewsletterEmailArray`)
      .then(res => {
          console.log(res);
          console.log(res.data);
          axios.post(`https://aneajwrqpa.execute-api.us-east-1.amazonaws.com/dev/newsletter`, res.data )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
      })
      .catch(error => {
          console.error("Error:", error);
      })
  }


  render() {
    return (
      <Layout>
        <SEO title="Admin"/>
        <div>Admin</div>
        <button onClick={this.addNewsletter}>Send Newsletter</button>
      </Layout>
    );
  }
}


export default Admin;

