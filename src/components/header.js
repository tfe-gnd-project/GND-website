import React from 'react'
import "./header.css"

import { Link } from "gatsby"
import { FaBars } from 'react-icons/fa'

import logo from '../images/gnd-logo.svg'


class Header extends React.Component {
  state = {
    toggleicon: 'menu'
  }

  handleToggle = () => {
    if (this.state.toggleicon === 'menu') {
      this.setState({
        toggleicon: 'menu responsive'
      })
    } else {
      this.setState({
        toggleicon: 'menu'
      })
    }
  }

  render() {
    return (
        <div>
          <div className={this.state.toggleicon}>
            <Link to='/' className='gndlogobackground menufont' activeClassName='active'>
              <img className='gndlogo' src={logo} alt="logo"/>
            </Link>
            <Link className='links menufont'  to='/newhere' activeClassName='active'>New Here</Link>
            <Link className='links menufont' to='/events' activeClassName='active'>Events</Link>
            <Link className='links menufont' to='/startserving/' activeClassName='active'>Start Serving</Link>
            <Link className='links menufont' to='/photos' activeClassName='active'>Photos</Link>
            <Link className='links menufont' to='/contact' activeClassName='active'>Contact</Link>
            <Link style={{ backgroundColor: 'orange', borderRadius: '10px' }} className='links menufont donate' to='/donate' activeStyle={{ color: '#0a2f6c' }}>Donate</Link>
            <a className="icon" onClick={this.handleToggle}>
              <FaBars />
            </a>
          </div>
        </div>
    )
  }
}

export default Header
