import PropTypes from 'prop-types'
import React from 'react'

const headerStyle = {
  backgroundSize: `100vw`,
  maxHeight: `75px`,
  backgroundColor: `#0a2f6c`,
}

const title = {
  float: `left`, 
  marginTop: `15px`, 
  color: 'white', 
  letterSpacing: '2px',
  paddingLeft: '10px'
}

const gndlogo = {
  maxHeight: `50px`, 
  maxWidth: `50px`, 
  float: `left`, 
  margin: `10px`,
}

const Header = ({ siteTitle }) => (
  <div style={headerStyle}>
    <div>
      <img style={gndlogo} src="https://gurunanakdwara.com/img/gnd-logo.svg" alt="logo"/>
      <h1 style={title} >GND Website</h1>
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
