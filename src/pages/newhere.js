import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import splashimage from "../images/splashimage.png"
import "../assets/newhere.css"

//attending service images
import OneDressModestly from "../images/1-dress-modestly.png"
import TwoRemoveShoes from "../images/2-remove-shoes.png"
import ThreeCoverHead from "../images/3-cover-head.png"
import FourWashHands from "../images/4-wash-hands.png"

//daily practices images
import bana from "../images/bana.png"
import bani from "../images/bani.png"
import simran from "../images/simran.png"
import seva from "../images/seva.png"
import gatka from "../images/gatka.png"
import yoga from "../images/yoga.png"

//social media images
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.png"
import youtube from "../images/youtube.svg"
import twitter from "../images/twitter.png"



class NewHere extends React.Component {

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
        
        <div className="history">
          <div className="subheaderHistory">History of Guru Nanak Dwara</div>
          <div className="historytext">
            Guru Nanak Dwara was founded in 1970 as an Ashram (spiritual learning center) committed to practicing both the Sikh way of life and Kundalini Yoga as taught by Yogi Bhajan. In the early days, many of those attracted to Guru Nanak Dwara were the soul-searching youth of the consciousness revolution. Guru Nanak Dwara was unlike other collectives of the time as it provided a drug and alcohol free environment where spiritual discipline (daily Sadhana) and selfless service (Seva) were the means of peace, calm and delight. Bonds of support were formed through countless hours of meditation, singing, cooking, working and eating together.<br/><br/>
            In 1972, Darshan Singh Teji, a good friend of Yogi Bhajan’s, helped the Ashram members establish a Gurdwara. With loving attention, he instructed them in the proper care and ceremonies surrounding the Guru, which has proven to be a guiding light these many years. By 1980, the land where Guru Nanak Dwara currently resides, was purchased and the community focused on creating a ‘village lifestyle’, with many family dwellings surrounding the main center.<br/><br/>
            By the mid-80s, Sikhs originally from Punjab India, were attracted in large numbers to Guru Nanak Dwara, mainly due to the feeling of peaceful contemplation emanating from the community’s practices.
            The new Guru Nanak Dwara structure began in 1996 to provide the community with the infrastructure necessary for a bright and flourishing future, embracing the traditions of both East and West. The dynamic blend of a devotional Sadh Sangat (company of the holy), the sacred scriptures of the Sikhs, a healthy lifestyle, and Kundalini Yoga is unique and enables Guru Nanak Dwara to be a place of peace and refuge in service to the greater community.
          </div>
        </div>
       
          <div className="attendingAndPractice">
            <div className="attendingContainer">
              <div className="attendingHeader">Attending Gurdwara Service</div>
              <div className="attendingSubHeader">First time visiting Guru Nanak Dwara? Follow these four steps when entering.</div>
              <div className="attendingAllImagesAndText">
                <div className="attendingImagesAndText">
                  <img className="attendingImages" src={OneDressModestly} alt="1-dress-modestly"/>
                  <div className="attendingText">By coming into the Gurdwara, you are entering the Guru's royal court and joining the Sadh Sangat (company of the holy). Putting on modest, formal clothes is an outward projection of our internal respect for the Guru's court.</div>
                </div>
                <div className="attendingImagesAndText">
                  <img className="attendingImages" src={TwoRemoveShoes} alt="2-remove-shoes"/>
                  <div className="attendingText">Taking off our shoes &amp; socks before entering the Gurdwara has both a hygienic, practical effect of keeping the Gurdwara clean and a reverent, spiritual effect of leaving the outside world behind.</div>
                </div>
                <div className="attendingImagesAndText">
                  <img className="attendingImages" src={ThreeCoverHead} alt="3-cover-head"/>
                  <div className="attendingText">Putting on a head cover gives form to the understanding that the head is the crown of our consciousness. In Gurdwara, this signifies that we honor and protect the seat of our spiritual awareness.</div>
                </div>
                <div className="attendingImagesAndText">
                  <img className="attendingImages" src={FourWashHands} alt="4-wash-hands"/>
                  <div className="attendingText">Cleanliness is next to Godliness. By cleaning our hands and feet before we enter the Gurdwara we sanitize our bodies so we can cleanse our spirits.</div>
                </div>
              </div>
            </div>
            <div className="practiceContainer">
              <div className="practiceHeader">Our Daily Practice</div>
              <div className="practiceSubHeader">A way of life dedicated to health, happiness and holiness.</div>
              <div className="practiceAllImagesAndText">
                <div className="practiceImagesAndText">
                  <img className="practiceImages" src={bana} alt="bana"/>
                  <div className="practiceTextMiddle">Bana</div>
                  <div className="practiceText">Sikh Uniform</div>
                </div>
                <div className="practiceImagesAndText">
                  <img className="practiceImages" src={bani} alt="bani"/>
                  <div className="practiceTextMiddle">Bani</div>
                  <div className="practiceText">Scriptures Recited Daily</div>
                </div>
                <div className="practiceImagesAndText">
                  <img className="practiceImages" src={simran} alt="simran"/>
                  <div className="practiceTextMiddle">Simran</div>
                  <div className="practiceText">Continuous Meditation</div>
                </div>
                <div className="practiceImagesAndText">
                  <img className="practiceImages" src={seva} alt="seva"/>
                  <div className="practiceTextMiddle">Seva</div>
                  <div className="practiceText">Selfless Service</div>
                </div>
                <div className="practiceImagesAndText">
                  <img className="practiceImages" src={gatka} alt="gatka"/>
                  <div className="practiceTextMiddle">Gatka</div>
                  <div className="practiceText">Sikh Martial Art</div>
                </div>
                <div className="practiceImagesAndText">
                  <img className="practiceImages" src={yoga} alt="yoga"/>
                  <div className="practiceTextMiddle">Yoga</div>
                  <div className="practiceText">Union with the Infinite</div>
                </div>
              </div>
            </div>
          </div>
          <div className="getConnected">
            <div className="getConnectedHeader">Connect With Us</div>
            <div className="imagesAndButtonsContainer">
              <div className="getConnectedAllImages">
                <a href="https://www.facebook.com/gurunanakdwara/" rel="noopener noreferrer" title="GND Facebook Page" target="_blank">
                  <img className="getConnectedImage" src={facebook} alt="facebook"/>
                </a>
                <a href="https://www.instagram.com/gurunanakdwara/" rel="noopener noreferrer" title="GND Instagram Page" target="_blank">
                  <img className="getConnectedImage" src={instagram} alt="instagram"/>
                </a>
                <a href="https://twitter.com/gurunanakdwara" rel="noopener noreferrer"  title="GND Twitter Page" target="_blank">
                  <img className="getConnectedImage" src={twitter} alt="twitter"/>
                </a>
                <a href="https://www.youtube.com/c/GuruNanakDwara" rel="noopener noreferrer" title="GND YouTube Channel" target="_blank">
                  <img className="getConnectedImage" src={youtube} alt="youtube"/>
                </a>
              </div>
              <div className="getConnectedButtonsContainer">
                <Link to='/subscribe' className="getConnectedButton">Subscribe</Link>
                <a href="https://www.google.com/maps/place/Guru+Nanak+Dwara/@33.4754179,-112.0654331,14.37z/data=!4m5!3m4!1s0x872b125f9d3f800b:0x4952a3dc1c4406b7!8m2!3d33.4733031!4d-112.0621051" rel="noopener noreferrer" title="Directions to Guru Nanak Dwara" target="_blank" className="getConnectedButton">Directions</a>
                <Link to='/events' className="getConnectedButton">Events</Link>
                <Link to='/startserving' className="getConnectedButton">Start Serving</Link>
              </div>
            </div>
          </div>
      </Layout>
    );
  }
}


export default NewHere;

