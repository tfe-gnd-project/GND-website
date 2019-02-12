import PropTypes from 'prop-types'
import React from 'react'


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
      <div style={{ margin: 0 , color: "white", fontSize: "small", textAlign: 'center'}}>
      <img style ={icons} src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png" alt="facebook" />
      Guru Nanak Dwara is a tax-exempt 501c(3) non-profit charitable organization. Every generous donation is tax deductible in the USA.
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
