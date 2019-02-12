import PropTypes from 'prop-types'
import React from 'react'
import './footer.css'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'




const icons = {
  width: '20px',
  height: '20px',
  
}

const Footer = ({ siteTitle }) => (
  <div style={{ background: `#0a2f6c` }} >
    {/* <div>
      <img style ={icons} src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png" alt="facebook" />
    </div> */}

    <div style={{ padding: `1.00rem 1.0875rem` }}>
      <div className='font-container'>
        <a href="https://www.facebook.com/gurunanakdwara/" rel="noopener noreferrer" class="social-media" title="GND Facebook Page" target="_blank"><FaFacebook className='icons'/></a>
         
        <a href="https://www.instagram.com/gurunanakdwara/" rel="noopener noreferrer" class="social-media" title="GND Instagram Page" target="_blank">
        <FaInstagram className='icons' /></a>

        <a href="https://twitter.com/gurunanakdwara" rel="noopener noreferrer"  class="social-media" title="GND Twitter Page" target="_blank">
        <FaTwitter className='icons' /></a>

        <a href="https://www.youtube.com/c/GuruNanakDwara" rel="noopener noreferrer" class="social-media" title="GND YouTube Channel" target="_blank">
        <FaYoutube className='icons' /></a>
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
