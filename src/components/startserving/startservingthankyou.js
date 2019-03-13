import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FaSpinner } from 'react-icons/fa'
import "../../assets/subscribe.css";

class StartServingThankYou extends React.Component {

  refresh = () => {
    window.location.reload();
  }

  render() {
    return (
      <div>     
        <div >
          <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle style={{margin: "auto"}} id="form-dialog-title">{this.props.messageHeader}</DialogTitle>
            <DialogContent>             
              {this.props.message === "Please wait..." 
                ? 
                <DialogContentText style={{textAlign: "center"}}>{this.props.message} <FaSpinner className="spinner"/></DialogContentText>
                :
                <DialogContentText style={{textAlign: "center"}}>{this.props.message}</DialogContentText>
              }                   
            </DialogContent>
            <DialogActions>
              {this.props.message === "You should recieve a confirmation email shortly." 
                ? 
                <Button onClick={this.refresh} color="primary">
                  Close
                </Button>
                :
                <Button onClick={this.props.onClose} color="primary">
                  Close
                </Button>
              }
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }        
}

export default StartServingThankYou;
