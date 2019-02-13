import React from 'react'
import "./navbar.css"

import { Link } from "gatsby"
import { FaBars } from 'react-icons/fa'


class Navbar extends React.Component {

  state = {
    toggleicon: 'topnav'
  }

  handleToggle = () => {
    if (this.state.toggleicon === 'topnav') {
      this.setState({
        toggleicon: 'topnav responsive'
      })
    } else {
      this.setState({
        toggleicon: 'topnav'
      })
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.toggleicon}>
          <Link className='menufont' to='/'>Home</Link>
          <Link className='menufont' to='/contact'>Contact</Link>
          <Link className='menufont' to='/donate'>Donate</Link>
          <a className="icon" onClick={this.handleToggle}>
            <FaBars />
          </a>
        </div>
      </div>
    )
  }
  
}



export default Navbar
