import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import GNDhistory from '../components/newhere/GNDhistory'
import Attending from '../components/newhere/attending'
import DailyPractice from '../components/newhere/dailypractice'
import Connect from '../components/newhere/connect'

import splashimage from "../images/splashimage.png"
import "../assets/newhere.css"


class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="New Here"/>
        <div className="container">
          <img className="splashimage" src={splashimage} alt="GND Building" />
          <div className="splashimagetext">
            Welcome to Guru Nanak Dwara
            <p className="paragraph">Guru Nanak Dwara, which means "Gate to Guru Nanak," was established in 1970 as the first Gurdwara in the state of Arizona. Today, it continues to serve the community as a vibrant spiritual campus in the center of historic Phoenix. Guru Nanak was the founder and first Guru of Sikhism, and taught that all humans are equal in the eyes of the One Creator.</p>
          </div>
        </div>

        <div className="welcomeGNDMobile">
          <div className="welcomeGNDMobileHeader">Welcome to Guru Nanak Dwara</div>
          <div className="welcomeGNDMobileText">
            Guru Nanak Dwara, which means "Gate to Guru Nanak," was established in 1970 as the first Gurdwara in the state of Arizona. Today, it continues to serve the community as a vibrant spiritual campus in the center of historic Phoenix. Guru Nanak was the founder and first Guru of Sikhism, and taught that all humans are equal in the eyes of the One Creator.
          </div>
        </div>

        <GNDhistory />
        <Attending />
        <DailyPractice />
        <Connect />

      </Layout>
    );
  }
}


export default Index;

