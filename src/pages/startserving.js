import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Formik, Form } from "formik";
import * as Yup from "yup"
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import SubscribeThankYou from '../components/startserving/startservingthankyou'
import startserving1 from '../images/startserving1.jpg'
import startserving2 from '../images/startserving2.jpg'
import startserving3 from '../images/startserving3.jpg'
import { FaSpinner } from 'react-icons/fa'
import "../assets/startserving.css";
import ranges from '../assets/startservingData/states'
import serving from '../assets/startservingData/serving'



const validationSchema = Yup.object({
  first: Yup.string()
  .matches(/^[- A-Za-z']+$/, 'Please enter a valid first name.')
  .required("Please enter a first name."),
  last: Yup.string()
  .matches(/^[- A-Za-z']+$/, 'Please enter a valid last name.')
  .required("Please enter a last name."),
  street: Yup.string()
  .required("Please enter a street address"),
  unit: Yup.string(),
  city: Yup.string()
  .matches(/^[- A-Za-z']+$/, 'Please enter a valid city.')
  .required("Please enter a city"),
  state: Yup.string()
  .required("Please select a state"),
  zipcode: Yup.string()
  .matches(/\d{5}/, 'Please enter a valid ZIP code.')
  .required("Please enter a zip code"),
  phone: Yup.string()
  .matches(/\d{3}([-])\d{3}([-])\d{4}/, 'Please enter in this format: ###-###-####')
  .required("Please enter in this format: ###-###-####"),
  email: Yup.string()
  .email("Please enter a valid email address.")
  .required("Please enter an email address"),
  serve: Yup.string()
  .required("Please choose a service"),
  comments: Yup.string()
  .required("Please briefly describe how you want to serve"),
})

class Forms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
      messageHeader: "",
      checked: false,
      open: false,
    }
  }
  

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  sendEmail = (email, first) => {
    const user = { email, first }
    axios.post(`https://qbjqrzyla9.execute-api.us-east-1.amazonaws.com/dev/send-email-serving-page`, user)
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({
        message: "You should recieve a confirmation email shortly.",
        messageHeader: `Thank you for volunteering ${first}!`,
      })
    })
    .catch(error => {
      console.error("Error:", error);
      this.setState({
        message: "ERROR: Submission failed. \r\n The backend may not be running at this time.",
      })
    })
  }
  
  submitValues = ({ first, last, street, unit, city, state, zipcode, phone, email, serve, comments }) => { 
    this.setState({
      open: true,
      messageHeader: "",
      message: "Please wait...",
    })
    const person = {
      firstName: first,
      lastName: last,
      address1: street, 
      unitNumber: unit, 
      city: city, 
      stateProvinceGeoId: state, 
      postalCode: zipcode, 
      contactNumber: phone,
      emailAddress: email,
      service: serve,
      comment: comments,
    };
    // if checked is true, add email to newsletter list
    if (this.state.checked === true) {
      axios.post(`http://localhost:8080//apps/NewPage/NewForm/addNewsletterEmail`, person )
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.sendEmail(email, first);
        })
        .catch(error => {
          console.error("Error:", error);
          this.setState({
            message: "ERROR: Submission failed. \r\n The backend may not be running at this time."
          })
        })
    } else {
      axios.post(`http://localhost:8080//apps/NewPage/NewForm/addServingContent`, person )
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.sendEmail(email, first);
        })
        .catch(error => {
          console.error("Error:", error);
          this.setState({
            message: "ERROR: Submission failed. \r\n The backend may not be running at this time."
          })
        })
    }
  }


  render() {
    const values = { 
      first: "", 
      last: "", 
      street: "", 
      unit: "", 
      city: "", 
      state: "", 
      zipcode: "", 
      phone: "", 
      email: "",
      serve: "",
      comments: ""
    };
    return (
      <Layout>
        <SEO title="Start Serving"/>        
        <div >
          <Formik
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={this.submitValues}
          >
            {({
              values: { 
                first, last, street, unit, city, state, zipcode, phone, email, serve, comments
              },
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <Form onSubmit={handleSubmit}>
                <center>
                  <div className='start-serving-header'>
                      Start Serving
                  </div>
                </center>
                <div className='both-borders'>
                  <div className='border'>
                    <div className="subheaders">Ways To Serve</div>
                    <img className='images image1' src={startserving1} alt='service'/>
                    <img className='images image2' src={startserving2} alt='service'/>
                    <img className='images image3' src={startserving3} alt='service'/>
                    <br/>
                    <TextField
                      className='textfieldEmail'
                      label="How would you like to start serving?"
                      id="serve"
                      name="serve"
                      helperText={touched.serve ? errors.serve : ""}
                      error={touched.serve && Boolean(errors.serve)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={serve}
                      margin="normal"
                      variant="outlined"
                      select
                    >
                      {serving.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <br/>
                    <TextField
                      className='textfieldEmail'
                      label="Tell us how you can serve in your own unique way"
                      id="comments"
                      name="comments"
                      helperText={touched.comments ? errors.comments : ""}
                      error={touched.comments && Boolean(errors.comments)}
                      value={comments}
                      margin="normal"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      multiline
                      rows="4"
                    />
                    <br/>
                    <FormControlLabel
                      className="checkboxlabel"
                      control={
                        <Checkbox
                          checked={this.state.checked}
                          onChange={this.handleChange('checked')}
                          value="checked"
                          color="primary"
                        />
                      }
                      label="Send me newsletters about Guru Nanak Dwara."
                    />
                  </div>                            
                  <div className="border">
                    <div className="subheaders">Contact Information</div>
                    <TextField
                      className="textfield"
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
                      className="textfield"
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
                      className="textfield"
                      id="street"
                      name="street"
                      helperText={touched.street ? errors.street : ""}
                      error={touched.street && Boolean(errors.street)}
                      label="Street Address"
                      value={street}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      className="textfield"
                      id="unit"
                      name="unit"
                      helperText={touched.unit ? errors.unit : ""}
                      error={touched.unit && Boolean(errors.unit)}
                      label="Apt/Unit"
                      value={unit}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      className="textfield"
                      id="city"
                      name="city"
                      helperText={touched.city ? errors.city : ""}
                      error={touched.city && Boolean(errors.city)}
                      label="City"
                      value={city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin="normal"
                      variant="outlined"
                    />                  
                    <TextField
                      className="textfield"
                      id="state"
                      name="state"
                      helperText={touched.state ? errors.state : ""}
                      error={touched.state && Boolean(errors.state)}
                      label="State"
                      value={state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin="normal"
                      variant="outlined"
                      select
                    >
                      {ranges.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>                     
                    <TextField
                      className="textfield"
                      id="zipcode"
                      name="zipcode"
                      helperText={touched.zipcode ? errors.zipcode : ""}
                      error={touched.zipcode && Boolean(errors.zipcode)}
                      label="Zip Code"
                      value={zipcode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin="normal"
                      variant="outlined"
                    />                 
                    <TextField
                      className="textfield"
                      id="phone"
                      name="phone"
                      placeholder="###-###-####"
                      helperText={touched.phone ? errors.phone : ""}
                      error={touched.phone && Boolean(errors.phone)}
                      label="Phone Number"
                      value={phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin="normal"
                      variant="outlined"
                    /><br/>                  
                    <TextField
                      className='textfieldEmail'
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
                    {this.state.message === "Please wait..." 
                      ? 
                      <div style={{ fontFamily: 'sans-serif' }}>{this.state.message} <FaSpinner className="spinner"/></div>
                      :
                      <div style={{ fontFamily: 'sans-serif' }}>{this.state.message}</div>
                    }                  
                    <Button className="startservingButton" type="submit" margin="normal" variant="contained">
                      Submit
                    </Button>               
                  </div>               
                </div>               
                <br/>
              </Form>
            )}
          </Formik>


        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <SubscribeThankYou open={this.state.open} onClose={this.handleClose} message={this.state.message} messageHeader={this.state.messageHeader}/>
        </Dialog>
      </Layout>
    );
  }       
}


export default Forms;
