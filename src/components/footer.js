import React from 'react'
import './footer.css'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaRegBell } from 'react-icons/fa'
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import Subscribe from './subscribe'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,    
    }
  }
  
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div style={{ background: `#0a2f6c` }} >
        <div style={{ padding: `1.00rem 1.0875rem`}}>
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
            <Tooltip disableFocusListener title="Subscribe" placement="right">
              <FaRegBell className='icons' onClick={this.handleClickOpen}/>
            </Tooltip>          
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <Subscribe open={this.state.open} onClose={this.handleClose}/>
            </Dialog>
          </div>
          <div className='font'>
            Guru Nanak Dwara is a tax-exempt 501c(3) non-profit charitable organization.
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
