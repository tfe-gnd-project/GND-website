import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

import axios from 'axios';
import { Formik, Form } from "formik";
import * as Yup from "yup"

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grow from '@material-ui/core/Grow';

import startserving1 from '../images/startserving1.jpg'
import startserving2 from '../images/startserving2.jpg'
import startserving3 from '../images/startserving3.jpg'

import "../assets/startserving.css";


const textfield = { 
    minWidth: '300px',
    maxWidth: '300px',
    margin: '10px',
}
  
const button = {
    backgroundColor: "#0a2f6c",
    color: 'white',
    height: 50,
    maxWidth: '100px',
    fontSize: 17,
    marginTop: '15px',
  }

const ranges = [
    {
        value: 'USA_AK',
        label: 'AK',
    },
    {
        value: 'USA_AL',
        label: 'AL',
    },
    {
        value: 'USA_AR',
        label: 'AR',
    },
    {
        value: 'USA_AZ',
        label: 'AZ',
    },
    {
        value: 'USA_CA',
        label: 'CA',
    },
    {
        value: 'USA_CO',
        label: 'CO',
    },
    {
        value: 'USA_CT',
        label: 'CT',
    },
    {
        value: 'USA_DE',
        label: 'DE',
    },
    {
        value: 'USA_FL',
        label: 'FL',
    },
    {
        value: 'USA_GA',
        label: 'GA',
    },
    {
        value: 'USA_HI',
        label: 'HI',
    },
    {
        value: 'USA_IA',
        label: 'IA',
    },
    {
        value: 'USA_ID',
        label: 'ID',
    },
    {
        value: 'USA_IL',
        label: 'IL',
    },
    {
        value: 'USA_IN',
        label: 'IN',
    },
    {
        value: 'USA_KS',
        label: 'KS',
    },
    {
        value: 'USA_KY',
        label: 'KY',
    },
    {
        value: 'USA_LA',
        label: 'LA',
    },
    {
        value: 'USA_MA',
        label: 'MA',
    },
    {
        value: 'USA_MD',
        label: 'MD',
    },
    {
        value: 'USA_ME',
        label: 'ME',
    },
    {
        value: 'USA_MI',
        label: 'MI',
    },
    {
        value: 'USA_MN',
        label: 'MN',
    },
    {
        value: 'USA_MO',
        label: 'MO',
    },
    {
        value: 'USA_MS',
        label: 'MS',
    },
    {
        value: 'USA_MT',
        label: 'MT',
    },
    {
        value: 'USA_NC',
        label: 'NC',
    },
    {
        value: 'USA_ND',
        label: 'ND',
    },
    {
        value: 'USA_NE',
        label: 'NE',
    },
    {
        value: 'USA_NH',
        label: 'NH',
    },
    {
        value: 'USA_NJ',
        label: 'NJ',
    },
    {
        value: 'USA_NM',
        label: 'NM',
    },
    {
        value: 'USA_NV',
        label: 'NV',
    },
    {
        value: 'USA_NY',
        label: 'NY',
    },
    {
        value: 'USA_OH',
        label: 'OH',
    },
    {
        value: 'USA_OK',
        label: 'OK',
    },
    {
        value: 'USA_OR',
        label: 'OR',
    },
    {
        value: 'USA_PA',
        label: 'PA',
    },
    {
        value: 'USA_RI',
        label: 'RI',
    },
    {
        value: 'USA_SC',
        label: 'SC',
    },
    {
        value: 'USA_SD',
        label: 'SD',
    },
    {
        value: 'USA_TN',
        label: 'TN',
    },
    {
        value: 'USA_TX',
        label: 'TX',
    },
    {
        value: 'USA_UT',
        label: 'UT',
    },
    {
        value: 'USA_VA',
        label: 'VA',
    },
    {
        value: 'USA_VT',
        label: 'VT',
    },
    {
        value: 'USA_WA',
        label: 'WA',
    },
    {
        value: 'USA_WI',
        label: 'WI',
    },
    {
        value: 'USA_WV',
        label: 'WV',
    },
    {
        value: 'USA_WY',
        label: 'WY',
    },
  ];


const serving = [
  {
    value: 'Fundraising',
    label: 'Fundraising',
  },
  {
    value: 'Program Development',
    label: 'Program Development',
  },
  {
    value: 'Operations',
    label: 'Operations',
  },
  {
    value: 'Security',
    label: 'Security',
  },
  {
    value: 'Marketing',
    label: 'Marketing',
  },
  {
    value: 'Event Production',
    label: 'Event Production',
  },
  {
    value: 'Public Relations',
    label: 'Public Relations',
  },
  {
    value: 'Guru Ka Langar',
    label: 'Guru Ka Langar',
  },
  {
    value: 'Khalsa Youth Training',
    label: 'Khalsa Youth Training',
  },
  {
    value: 'Marble Perkarma',
    label: 'Marble Perkarma',
  },
  {
    value: 'Ramala Set Up',
    label: 'Ramala Set Up',
  },
  {
    value: 'Kirtan, Ardas or Hukham',
    label: 'Kirtan, Ardas or Hukham',
  },
  {
    value: 'Akhand Path',
    label: 'Akhand Path',
  },
  {
    value: 'Other',
    label: 'Other',
  },
]

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
  description: Yup.string()
  .required("Please provide a brief description of your service"),
})


class Forms extends React.Component {
  state = {
    message: "",
    messageColor: "",
    checked: false,
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  sendEmail = (email) => {

      console.log(email)
      const user = {
          email
      }

      axios.post(`https://4i3mkrng2k.execute-api.us-east-1.amazonaws.com/dev/ses-api`, user)
              .then(res => {
                  console.log(res);
                  console.log(res.data);
              })
              .catch(error => {
                  console.error("Error:", error);
              })
  }
  
  submitValues = ({ first, last, street, unit, city, state, zipcode, phone, email }) => 
      { 
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
          };
  
          console.log(person)

          axios.post(`http://54.224.143.14:8080/apps/NewPage/NewForm/createCCOSApplication`,
              person )
              .then(res => {
                  console.log(res);
                  console.log(res.data);
                  this.sendEmail(email);
                  this.setState({
                      message: "Submission successful!",
                      messageColor: "green"
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
        description: ""
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
                    first, last, street, unit, city, state, zipcode, phone, email, serve, description
                },
                errors,
                touched,
                handleChange,
                handleSubmit,
                handleBlur,
            }) => (
              <Form  onSubmit={handleSubmit} >
              <Grow
                in='true'
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 1000 } : {})}
                >
                <center>
                    <div className='start-serving-header'>
                        START SERVING
                    </div>
                </center>
                </Grow> <br/>

              <div className='both-borders'>
                <Grow
                    in='true'
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: 1000 } : {})}
                >
                    <div className='border'>
                        <div className="subheaders">WAYS TO SERVE</div>
                        <Grow
                            in='true'
                            {...(true ? { timeout: 2000 } : {})}
                        >
                            <img className='images image1' src={startserving1} alt='service'/>
                        </Grow>
                        <Grow
                            in='true'
                            {...(true ? { timeout: 2000 } : {})}
                        >
                            <img className='images' src={startserving2} alt='service'/>
                        </Grow>
                        <Grow
                            in='true'
                            {...(true ? { timeout: 2000 } : {})}
                        >
                            <img className='images' src={startserving3} alt='service'/>
                        </Grow>
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
                            id="description"
                            name="description"
                            helperText={touched.description ? errors.description : ""}
                            error={touched.description && Boolean(errors.description)}
                            value={description}
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
              </Grow>
              <Grow
                in='true'
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 2000 } : {})}
                >
                <div className="border">
                  <div className="subheaders">CONTACT INFORMATION</div>
                  <TextField
                      style={textfield}
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
                      style={textfield}
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
                      style={textfield}
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
                      style={textfield}
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
                      style={textfield}
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
                      style={textfield}
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
                      style={textfield}
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
                      style={textfield}
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
                    <Button
                        style={button}
                        type="submit"
                        margin="normal"
                        variant="contained"
                    >
                        Submit
                    </Button>
                
                </div>
                </Grow>
                
              
                </div>
                
                <br/>

              </Form>
            )}
          </Formik>
        </div>
      </Layout>

    );

  }
        
}


export default Forms;
