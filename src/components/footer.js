import PropTypes from 'prop-types'
import React from 'react'
import { Link } from "gatsby"
import './footer.css'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaMailBulk } from 'react-icons/fa'
import Tooltip from '@material-ui/core/Tooltip';



const Footer = ({ siteTitle }) => (
  <div style={{ background: `#0a2f6c` }} >
    <div style={{ padding: `1.00rem 1.0875rem` }}>
      <div className='font-container'>
        <a href="https://www.facebook.com/gurunanakdwara/" rel="noopener noreferrer" title="GND Facebook Page" target="_blank">
          <Tooltip title="Facebook" placement="left">
            <FaFacebook className='icons'/>
          </Tooltip>
        </a>
         
        <a href="https://www.instagram.com/gurunanakdwara/" rel="noopener noreferrer" title="GND Instagram Page" target="_blank">
          <Tooltip title="Instagram" placement="top">
            <FaInstagram className='icons' />
          </Tooltip>
        </a>

        <a href="https://twitter.com/gurunanakdwara" rel="noopener noreferrer"  title="GND Twitter Page" target="_blank">
          <Tooltip title="Twitter" placement="top">
            <FaTwitter className='icons' />
          </Tooltip>
        </a>

        <a href="https://www.youtube.com/c/GuruNanakDwara" rel="noopener noreferrer" title="GND YouTube Channel" target="_blank">
          <Tooltip title="YouTube" placement="top">
            <FaYoutube className='icons' />
          </Tooltip>
        </a>

        <Link to='/subscribe'>
          <Tooltip disableFocusListener title="Subscribe" placement="right">
            <FaMailBulk className='icons' />
          </Tooltip>
        </Link>
      </div>


      <div className='font'>
        Guru Nanak Dwara is a tax-exempt 501c(3) non-profit charitable organization.
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
