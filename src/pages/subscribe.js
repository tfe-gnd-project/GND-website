import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

import axios from 'axios';
import { Formik, Form } from "formik";
import * as Yup from "yup"

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "../assets/startserving.css";
import { FaSpinner } from 'react-icons/fa'


const textfield = { 
    minWidth: '300px',
    maxWidth: '300px',
    margin: '10px',
}
  
const button = {
    backgroundColor: "#0a2f6c",
    color: 'white',
    height: 50,
    maxWidth: '120px',
    fontSize: 17,
    marginTop: '15px',
  }



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
  state = {
    message: "",
    messageColor: "",
  }

  submitValues = ({ first, last, email }) => 
      { 
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
                console.log(res);
                console.log(res.data);
                this.setState({
                  message: "Thank you for subscribing!",
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
    const values = { first: "", last: "", email: "" };

    return (
      <Layout>
        <SEO title="Subscribe"/>
        
        <div >
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
              <Form  onSubmit={handleSubmit} >
                <center>
                    <div className='start-serving-header'>
                        SUBSCRIBE
                    </div>
                </center><br/>

              <div className='both-borders'>
                    
                <div className="border">
                  <div className="subheaders">Subscribe to receive newsletters from Guru Nanak Dwara.</div>
                  <br/>

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
                    <div style={{ fontFamily: 'sans-serif', color: this.state.messageColor}}>{this.state.message}</div>
                  }
                  
                    <Button
                        style={button}
                        type="submit"
                        margin="normal"
                        variant="contained"
                    >
                        Subscribe
                    </Button>
                
                </div>
                
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
