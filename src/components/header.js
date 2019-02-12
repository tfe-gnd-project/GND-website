import PropTypes from 'prop-types'
import React from 'react'
import { Link } from "gatsby"

const headerStyle = {
  backgroundSize: `100vw`,
  minHeight: `75px`,
  backgroundColor: `#0a2f6c`,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingTop: '10px',
  paddingLeft: '10px'
}

const title = {
  float: `left`, 
  marginTop: `15px`, 
  color: 'white', 
  letterSpacing: '2px',
  paddingLeft: '10px',
  flexDirection: 'row',
  flexWrap: 'wrap',
  fontSize: '2.2em'
}

const gndlogo = {
  minHeight: '60px',
  minWidth: '60px',
  maxHeight: `60px`, 
  maxWidth: `60px`, 
  float: `left`, 
  margin: `5px`,
  flexDirection: 'row',
  flexWrap: 'wrap'
}

const gndlogobackground = {
  minHeight: '70px',
  maxHeight: '70px',
  minWidth: '70px',
  maxWidth: '70px',
  backgroundColor: 'white',
  borderRadius: '50%',
  flexDirection: 'row',
  flexWrap: 'wrap'
}

const menu = {
  padding: '10px',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  width: '100%',
}

const menufont = {
  color: `#0a2f6c`,
  fontFamily: 'sans-serif',
  textDecoration: 'none',
  display: 'block',
  flex: '0 1 auto',
  paddingLeft: '20px',
  paddingRight: '20px',
}


const Header = ({ siteTitle }) => (
  <div>
    <div style={headerStyle}>
        <div style={gndlogobackground}>
          <img style={gndlogo} src="https://gurunanakdwara.com/img/gnd-logo.svg" alt="logo"/>
        </div>
        <h1 style={title} >Guru Nanak Dwara</h1>
    </div>

    <div style={menu}>
      <Link to="/" style={menufont}>Home</Link>
      <Link to="/" style={menufont}>New Here</Link>
      <Link to="/" style={menufont}>Events</Link>
      <Link to="/" style={menufont}>Start Serving</Link>
      <Link to="/" style={menufont}>Photos</Link>
      <Link to="/" style={menufont}>Donate</Link>            
      <Link to="/contact/" style={menufont}>Contact</Link>
    </div>
  </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
