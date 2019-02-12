import PropTypes from 'prop-types'
import React from 'react'
import { Link } from "gatsby"
import "./header.css"


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
  fontSize: '2.2em',
  marginLeft: '10px'
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


const Header = ({ siteTitle, menuLinks }) => (
  <div>
    <div style={headerStyle}>
        <div style={gndlogobackground}>
          <img style={gndlogo} src="https://gurunanakdwara.com/img/gnd-logo.svg" alt="logo"/>
        </div>
        <h1 style={title} >Guru Nanak Dwara</h1>
    </div>

    <nav className='menu'>
      {
        menuLinks.map(link =>
          <li key={link.name}>
            <Link className='menufont' to={link.link}>{link.name}</Link>
          </li>)
      }
    </nav>
  </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
