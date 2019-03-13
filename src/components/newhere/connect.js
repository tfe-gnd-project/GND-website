import React from 'react';
import { Link } from "gatsby"

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

import Subscribe from '../subscribe'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const directions = "https://www.google.com/maps/place/Guru+Nanak+Dwara/@33.4754179,-112.0654331,14.37z/data=!4m5!3m4!1s0x872b125f9d3f800b:0x4952a3dc1c4406b7!8m2!3d33.4733031!4d-112.0621051"

class Connect extends React.Component {
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
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} style={{backgroundColor: "#0a2f6cb0", margin: "auto", marginBottom: "20px", maxWidth: "95vw"}} elevation={1}>
          <Typography variant="h5" component="h3" style={{color: "white", textAlign: "center", marginBottom: "10px"}}>
            Connect With Us
          </Typography>
          <div className="imagesAndButtonsContainer" >
            <div className="getConnectedButtonsContainer">
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
                <Subscribe open={this.state.open} onClose={this.handleClose}/>
              </Dialog>
              <Button onClick={this.handleClickOpen} className="getConnectedButton">
                Subscribe
              </Button>
              <a 
                href={directions} 
                rel="noopener noreferrer" 
                title="Directions to Guru Nanak Dwara" 
                target="_blank" 
                style={{textDecoration: "none"}}
              >
                <Button className="getConnectedButton">
                  Directions
                </Button>
              </a>
              <Link to='/events' style={{textDecoration: "none"}}>
                <Button className="getConnectedButton">
                  Events
                </Button>
              </Link>
              <Link to='/startserving' style={{textDecoration: "none"}}>
                <Button className="getConnectedButton">
                  Start Serving
                </Button>
              </Link>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

Connect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Connect);
