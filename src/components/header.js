import React from 'react'
import "./header.css"

import { Link } from "gatsby"
import { FaBars } from 'react-icons/fa'



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
            <Link className='links menufont'  to='/newhere'>New Here</Link>
            <Link className='links menufont' to='/events'>Events</Link>
            <Link className='links menufont' to='/startserving' activeClassName='active'>Start Serving</Link>
            <Link className='links menufont' to='/contact' activeClassName='active'>Contact</Link>
            <Link className='links menufont' to='/donate'>Donate</Link>
            <button className="icon" onClick={this.handleToggle}>
              <FaBars />
            </button>
          </div>
        </div>
    )
  }
}

export default Header
