import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grow from '@material-ui/core/Grow';
import '../assets/index.css'
import homeimage from '../images/homeimage.png'

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
            <div className='homeborder'>
              <div className="homesubheaders">Welcome to Guru Nanak Dwara</div>
              <img className='image' src={homeimage} alt='service'/><br/>
              Guru Nanak Dwara, which means "Gate to Guru Nanak," was established in 1970 as the first Gurdwara in the state of Arizona. Today, it continues to serve the community as a vibrant spiritual campus in the center of historic Phoenix. Guru Nanak was the founder and first Guru of Sikhism, and taught that all humans are equal in the eyes of the One Creator.
            </div>
        </Grow>
      </Layout>
    );
  }
}


export default Index;

