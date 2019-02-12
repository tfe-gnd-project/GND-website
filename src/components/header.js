import PropTypes from 'prop-types'
import React from 'react'
import { Link } from "gatsby"
import "./header.css"


const Header = ({ siteTitle, menuLinks }) => (
  <div>
    <div className='headerStyle'>
        <div className='gndlogobackground'>
          <img className='gndlogo' src="https://gurunanakdwara.com/img/gnd-logo.svg" alt="logo"/>
        </div>
        <h1 className='title' >Guru Nanak Dwara</h1>
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
