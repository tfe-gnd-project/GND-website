import React from 'react';
import SEO from "./seo"
import { Formik, Form } from "formik";
import * as Yup from "yup"
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../assets/subscribe.css";

const validationSchema = Yup.object({
  first: Yup.string()
  .matches(/^[- A-Za-z']+$/, 'Please enter a valid first name.')
  .required("Please enter a first name."),
  last: Yup.string()
  .matches(/^[- A-Za-z']+$/, 'Please enter a valid last name.')
  .required("Please enter a last name."),
  email: Yup.string()
  .email("Please enter a valid email address.")
  .required("Please enter an email address"),
})

class Forms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
      messageColor: "",
      open: false,    
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  submitValues = ({ first, last, email }) => { 
    this.setState({
        message: "Please wait...",
    })
    const person = {
        firstName: first,
        lastName: last,
        emailAddress: email,
    };
    axios.post(`http://localhost:8080//apps/NewPage/NewForm/addNewsletterEmail`, person )
    .then(res => {
      console.log(res.data);
      this.setState({
        message: "Thank you for subscribing!",
        messageColor: "green",
      })
    })
    .catch(error => {
      console.error("Error:", error);
      this.setState({
        message: "Submission failed.",
        messageColor: "red"
      })
    })
}

  render() {
    const values = { first: "", last: "", email: "" };
    return (
      <div>
        <SEO title="Subscribe"/>       
        <div >
          <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle style={{margin: "auto"}} id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText style={{textAlign: "center"}}>
                Subscribe to receive newsletters from Guru Nanak Dwara.
              </DialogContentText>
              <Formik
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={this.submitValues}
              >
                {({
                  values: { first, last, email },
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  handleBlur,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="subscribeBorder">
                      <TextField
                        className="subscribeTextfield"
                        id="first"
                        name="first"
                        helperText={touched.first ? errors.first : ""}
                        error={touched.first && Boolean(errors.first)}
                        label="First Name"
                        value={first}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        className="subscribeTextfield"
                        id="last"
                        name="last"
                        helperText={touched.last ? errors.last : ""}
                        error={touched.last && Boolean(errors.last)}
                        label="Last Name"
                        value={last}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin="normal"
                        variant="outlined"
                      />                       
                      <TextField
                        className="subscribeTextfield"
                        id="email"
                        name="email"
                        helperText={touched.email ? errors.email : ""}
                        error={touched.email && Boolean(errors.email)}
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <br/>
                      { 
                        this.state.message === "Please wait..." 
                        ? 
                        <div style={{ fontFamily: 'sans-serif' }}>
                          {this.state.message} 
                          <CircularProgress className="subscribeProgress" />
                        </div>
                        :
                        <div style={{ fontFamily: 'sans-serif', color: this.state.messageColor}}>
                          {this.state.message}
                        </div>
                      }                     
                      <Button
                        className="subscribeButton"
                        type="submit"
                        margin="normal"
                        variant="contained"
                      >
                        Subscribe
                      </Button>                    
                    </div>
                    <br/>
                  </Form>
                )}
              </Formik>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.onClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }        
}


export default Forms;
