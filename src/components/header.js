import React from 'react'
import "./header.css"

import { Link } from "gatsby"
import { FaBars } from 'react-icons/fa'

import NavBar from './navbar'


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
            <Link to='/' className='gndlogobackground menufont'>
              <img className='gndlogo' src="https://gurunanakdwara.com/img/gnd-logo.svg" alt="logo"/>
            </Link>
            <Link className='links menufont' to='/newhere'>New Here</Link>
            <Link className='links menufont' to='/events'>Events</Link>
            <Link className='links menufont' to='/startserving'>Start Serving</Link>
            <Link className='links menufont' to='/contact'>Contact</Link>
            <Link className='links menufont' to='/donate'>Donate</Link>
            <a className="icon" onClick={this.handleToggle}>
              <FaBars />
            </a>
          </div>
        </div>
    )
  }
}

export default Header
