
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CallIcon from '@material-ui/icons/call';
import RoomIcon from '@material-ui/icons/room';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import "../assets/contact.css";
import axios from "axios";



const ContactSchema = Yup.object({
  firstName: Yup.string("Enter a name")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[- A-Za-z']+$/, "Enter a valid first name.")
    .required("Please enter your First Name"),
  lastName: Yup.string("Enter a name")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[- A-Za-z']+$/, "Enter a valid last name.")
    .required("Please enter your Last Name"),
  emailAddress: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Please enter your E-mail"),
  phoneNumber: Yup.string("Enter your phone number")
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Enter a valid phone number.")
    .required("Please enter a Phone Number"),
  questionAbout: Yup.string("Enter a message")
    .min(1, "What can we help you with?")
    .required("What can we help you with?")
});

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    border: `red 3px solid`,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const textfield = {
  marginLeft: 6,
  marginRight: 6,
  textAlign: `center`,
  width: `100%`,
  
}

const questions = [
  {
    value: "General Question",
    label: "General Question"
  },
  {
    value: "Reserve a Service ",
    label: "Reserve a Service"
  },
  {
    value: "Start Serving",
    label: "Start Serving"
  },
  {
    value: "Suggestion",
    label: "Suggestion"
  },
  {
    value: "Other",
    label: "Other"
  },
]


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  

  submitValues = ({
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    questionType,
    questionAbout,

  }) => {
    const custcontactinfo = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      questionType: questionType,
      questionAbout: questionAbout
    };
    console.log(custcontactinfo);

    axios
    .post(
      `http://localhost:8080/apps/CreditCardApp/ApplicationForm/createApplicationForm`,
      custcontactinfo
    )
    .then(res => {
      console.log(res);
      console.log(res.data);
    });

  console.log({
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    questionType,
    questionAbout,
  });

  };
  render() {
    const classes = this.props;
    const values = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      questionType: "",
      questionAbout: "",
    };
    return (
      <Layout>
        <div className="contactpage" style={{
            // border: `3px red solid`,
            // padding: 15,
            // borderRadius: 10,
            // backgroundColor: `gray`
            // margin: `0 auto`,
            // maxWidth: `100vw`,
            // padding: `0px 1.0875rem 1.45rem`,
            // paddingTop: 5,
            // color: `gray`
          }}>
         <center>
           <div className="contact-us-title" >
            <center><p>CONTACT US</p></center>
           </div>
           <div className="contact-address" >
           <p style={{ fontSize: 15 }}>
                    <CallIcon />:
                    <a href="tel:+1-602-632-9598">602-632-9598</a> 
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <RoomIcon />:
                    <a target="_blank"rel="noopener noreferrer"  href="https://goo.gl/maps/1hfhCynn68J2">
                    2302 N 9th St, Phoenix, AZ 85006{" "}</a>
                  </p>
           </div>
                <div className="contact-title" style={{ background: `linear-gradient(147deg,#0a2f6c,#6d6d6d,#c97e51)`, height: 250, maxWidth: `100vw`, borderRadius: 15, color: `white`, marginTop: 30}}>
                  <div className="contact-title-text" style={{paddingTop: 60}}>
                    <p style={{fontSize: 70}}>CONTACT US</p>
                     <p style={{ fontSize: 15 }}>
                    We're here for you. Questions? Suggestions? Want to volunteer?
                     </p>
                  <p style={{ fontSize: 15 }}>
                    <CallIcon />:
                    <a href="tel:+1-602-632-9598">602-632-9598</a> 
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <RoomIcon />:
                    <a target="_blank"rel="noopener noreferrer"  href="https://goo.gl/maps/1hfhCynn68J2">
                    2302 N 9th St, Phoenix, AZ 85006{" "}</a>
                  </p>
                  </div>
                </div>
              
            <Formik
      initialValues={values}
      validationSchema={ContactSchema}
      onSubmit={this.submitValues}
    >
            {({
              values: {
                firstName,
                lastName,
                emailAddress,
                phoneNumber,
                questionType,
                questionAbout,
              },
              errors,
              touched,
              handleChange,
              handleSubmit,
              isValid
            }) => (
            <Form className="mainform"
              style={{
                marginTop: 10,
                marginBottom: 30,
                padding: `15px 25px`,
                backgroundColor: `white`,
                borderRadius: 15,
                maxWidth: `100vw`,
                // boxShadow: `0 0 10px black`,
              }}
              onSubmit={handleSubmit} method="post">
              <TextField style={textfield}
                    name="firstName"
                    id="standard-required"
                    label="First name*"
                    value={firstName}
                    onChange={handleChange}
                    helperText={touched.firstName ? errors.firstName : ""}
                    error={touched.firstName && Boolean(errors.firstName)}
                    placeholder="ex. John"
                    margin="normal"
                    variant="outlined"
              />
      
              <TextField style={textfield}
                    name="lastName"
                    id="standard-required"
                    label="Last name*"
                    placeholder="ex. John"
                    value={lastName}
                    onChange={handleChange}
                    helperText={touched.lastName ? errors.lastName : ""}
                    error={touched.lastName && Boolean(errors.lastName)}
                    margin="normal"
                    variant="outlined"
                    className="textfield"
              />
                  <TextField style={textfield}
                    name="emailAddress"
                    id="standard-email-input"
                    label="E-mail*"
                    value={emailAddress}
                    onChange={handleChange}
                    helperText={touched.emailAddress ? errors.emailAddress : ""}
                    error={touched.emailAddress && Boolean(errors.emailAddress)}
                    type="email"
                    placeholder="ex. hi@email.com"
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                    />
                 
                  <TextField style={textfield}
                    name="phoneNumber"
                    id="standard-phone-input"
                    label="Phone Number*"
                    type="tel"
                    value={phoneNumber}
                    onChange={handleChange}
                    helperText={touched.phoneNumber ? errors.phoneNumber : ""}
                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    placeholder="ex. 555-555-5555"
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                    />
                    <br/>
                    <TextField 
                    style={{ width: `100%`, textAlign: `center` }}
                    id="standard-select-questions"
                    name="questionType"
                    select
                    value={questionType}
                    onChange={handleChange}
                    label="Type of Question"
                    helperText={
                      touched.questionType
                        ? errors.questionType
                        : ""
                    }
                    error={
                      touched.questionType &&
                      Boolean(errors.questionType)
                    }
                    SelectProps={{
                    MenuProps: {className: classes.menu}
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                      {questions.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <br/>
                    <TextField
                    style={{ width: `100%`, textAlign: `center` }}
                    name="questionAbout"
                    id="outlined-full-width"
                    label="My question is..."
                    value={questionAbout}
                    onChange={handleChange}
                    helperText={touched.questionAbout ? errors.questionAbout :""}
                    error={touched.questionAbout && Boolean(errors.questionAbout)}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <br/><center>
                  <button className="contactusbutton"type="submit">Submit</button></center>
                
            </Form>
           
            )}
            </Formik> </center>
            <SEO title="Contact Us" />
        </div>
      </Layout>
    );
  }
}


Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);

