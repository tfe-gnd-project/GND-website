import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FacebookEvents from '../components/events/facebookEvents'
import GoogleCalendar from '../components/events/googleCalendar'
import '../assets/events.css'

class Events extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="Events"/> 
        <div className="eventsContainer">     
          <FacebookEvents />
          <GoogleCalendar />
        </div> 
      </Layout>
    );
  }
}

export default Events;

