import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Formik, Form } from "formik";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import classNames from "classnames";
import "../assets/donation.css";
import Image1 from "../images/gndfloat1.jpg"
import Image2 from "../images/gndfloat2.jpg"
import Image3 from "../images/gndfloat3.jpg"
import SSLlogo from '../images/ssllogo.png'
import StripeLogo from '../images/stripe.png'

const validationSchema = Yup.object({
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
  address1: Yup.string("Enter an addres")
    .min(2, "Enter a valid address")
    .required("Please enter your Address"),
  city: Yup.string("Enter a city")
    .min(2, "Enter a valid city")
    .required("Please enter your City"),
  stateProviceGeoId: Yup.string("Select a State").required(
    "Please select your State"
  ),
  postalCode: Yup.string("Enter Postal Code").required(
    "Please enter your Postal Code"
  ),
  emailAddress: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Please enter your E-mail")
});

const styles = theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    }
 
  });

const textfield = {
  marginLeft: 6,
  marginRight: 6,
  textAlign: `center`,
  width: `100%`
};

const states = [
  {
    value: "USA_AL",
    label: "Alabama"
  },
  {
    value: "USA_AK",
    label: "Alaska"
  },
  {
    value: "USA_AZ",
    label: "Arizona"
  },
  {
    value: "USA_AR",
    label: "Arkansas"
  },
  {
    value: "USA_CA",
    label: "California"
  },
  {
    value: "USA_CO",
    label: "Colorado"
  },
  {
    value: "USA_CT",
    label: "Connecticut"
  },
  {
    value: "USA_DE",
    label: "Delaware"
  },
  {
    value: "USA_FL",
    label: "Florida"
  },
  {
    value: "USA_GA",
    label: "Georgia"
  },
  {
    value: "USA_HI",
    label: "Hawaii"
  },
  {
    value: "USA_ID",
    label: "Idaho"
  },
  {
    value: "USA_IL",
    label: "Illinois"
  },
  {
    value: "USA_IN",
    label: "Indiana"
  },
  {
    value: "USA_IA",
    label: "Iowa"
  },
  {
    value: "USA_KS",
    label: "Kansas"
  },
  {
    value: "USA_KY",
    label: "Kentucky"
  },
  {
    value: "USA_LA",
    label: "Louisiana"
  },
  {
    value: "USA_ME",
    label: "Maine"
  },
  {
    value: "USA_MD",
    label: "Maryland"
  },
  {
    value: "USA_MA",
    label: "Massachusetts"
  },
  {
    value: "USA_MI",
    label: "Michigan"
  },
  {
    value: "USA_MN",
    label: "Minnesota"
  },
  {
    value: "USA_MS",
    label: "Mississippi"
  },
  {
    value: "USA_MO",
    label: "Missouri"
  },
  {
    value: "USA_MT",
    label: "Montana"
  },
  {
    value: "USA_NE",
    label: "Nebraska"
  },
  {
    value: "USA_NV",
    label: "Nevada"
  },
  {
    value: "USA_NH",
    label: "New Hampshire"
  },
  {
    value: "USA_NJ",
    label: "New Jersey"
  },
  {
    value: "USA_NM",
    label: "New Mexico"
  },
  {
    value: "USA_NY",
    label: "New York"
  },
  {
    value: "USA_NC",
    label: "North Carolina"
  },
  {
    value: "USA_ND",
    label: "North Dakota"
  },
  {
    value: "USA_OH",
    label: "Ohio"
  },
  {
    value: "USA_OK",
    label: "Oklahoma"
  },
  {
    value: "USA_OR",
    label: "Oregon"
  },
  {
    value: "USA_PA",
    label: "Pennyslvania"
  },
  {
    value: "USA_RI",
    label: "Rhode Island"
  },
  {
    value: "USA_SC",
    label: "South Carolina"
  },
  {
    value: "USA_SD",
    label: "South Dakota"
  },
  {
    value: "USA_TN",
    label: "Tennessee"
  },
  {
    value: "USA_TX",
    label: "Texas"
  },
  {
    value: "USA_UT",
    label: "Utah"
  },
  {
    value: "USA_VT",
    label: "Vermont"
  },
  {
    value: "USA_VA",
    label: "Virginia"
  },
  {
    value: "USA_WA",
    label: "Washington"
  },
  {
    value: "USA_WV",
    label: "West Virginia"
  },
  {
    value: "USA_WI",
    label: "Wisconsin"
  },
  {
    value: "USA_WY",
    label: "Wyoming"
  }
];

class Donation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClick = e => {
    this.setState({ value: e.target.value });
  };

  onToken = (token, addresses) => {
    //need thank you page here
    // window.location.replace("thankyou");
  };

  ses = emailAddress => {
    const human = {
      emailAddress
    };

    console.log(emailAddress);

    axios
      .post(
        `https://spmsphl4da.execute-api.us-east-1.amazonaws.com/test/`,
        human
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  submitValues = ({
    firstName,
    middleName,
    lastName,
    address1,
    address2,
    city,
    stateProviceGeoId,
    postalCode,
    emailAddress
  }) => {
    const person = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      address1: address1,
      address2: address2,
      city: city,
      stateProviceGeoId: stateProviceGeoId,
      postalCode: postalCode,
      emailAddress: emailAddress
    };

    console.log(person);

    axios
      .post(
        `http://54.165.248.29:8080/apps/CreditCardApp/ApplicationForm/createApplicationForm`,
        person
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.ses(emailAddress);
      });

    console.log({
      firstName,
      middleName,
      lastName,
      address1,
      address2,
      city,
      stateProviceGeoId,
      postalCode,
      emailAddress
    });
  };

  onClosed = () => {};

  render() {
    const classes = this.props;
    const values = {
      firstName: "",
      middleName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      stateProviceGeoId: "",
      postalCode: "",
      emailAddress: ""
    };
    return (
      <Layout>
        <div className="donationpage">
          <center>
            <Formik
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={this.submitValues}
            >
              {({
                values: {
                  firstName,
                  middleName,
                  lastName,
                  address1,
                  address2,
                  city,
                  stateProviceGeoId,
                  postalCode,
                  emailAddress
                },
                errors,
                touched,
                handleChange,
                handleSubmit,
                isValid
              }) => (
                <Form 
                  onSubmit={handleSubmit}
                  method="post"
                >
                <img  className="ssl" src={SSLlogo} alt="SSLLogo" height="124" width="124"/>
                <div className="mainborder" >
                
                <center>
                    <h2>Select Amount To Donate</h2>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <RadioGroup
                          style={{ flexDirection: "row", justifyContent: `center`}}
                          className={classes.group}
                          value={this.state.value}
                          onChange={this.handleChange}
                        >
                          <FormControlLabel
                            className="radiobtn"
                            value="21.00"
                            control={
                              <Radio
                                color="primary"
                                onClick={e => this.handleClick(e)}
                              />
                            }
                            label="$21.00"
                          />
                          <FormControlLabel
                            className="radiobtn"
                            value="41.00"
                            control={<Radio color="primary" />}
                            label="$41.00"
                          />
                          <FormControlLabel
                            className="radiobtn"
                            value="61.00"
                            control={<Radio color="primary" />}
                            label="$61.00"
                          />
                          <FormControlLabel
                            className="radiobtn"
                            value="101.00"
                            control={<Radio color="primary" />}
                            label="$101.00"
                          />
                          <FormControlLabel
                            className="radiobtn"
                            value="251.00"
                            control={<Radio color="primary" />}
                            label="$251.00"
                          />
                          <TextField
                            style={{ maxWidth: 100 }}
                            id="outlined-adornment-amount"
                            className={classNames(
                              classes.margin,
                              classes.textField
                            )}
                            variant="outlined"
                            placeholder="Other"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  $
                                </InputAdornment>
                              )
                            }}
                            control={<Radio />}
                          />
                        </RadioGroup>
                      </FormControl>
                      </center>
                </div>
                <div className="mainborder" >
                  <TextField
                    style={textfield}
                    id="standard-required"
                    name="firstName"
                    label="First name*"
                    placeholder="ex. John"
                    value={firstName}
                    onChange={handleChange}
                    helperText={touched.firstName ? errors.firstName : ""}
                    error={touched.firstName && Boolean(errors.firstName)}
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                  />
                  <TextField
                    id="standard"
                    style={textfield}
                    name="middleName"
                    label="MI"
                    placeholder="ex. M"
                    value={middleName}
                    onChange={handleChange}
                    helperText={touched.middleName ? errors.middleName : ""}
                    error={touched.middleName && Boolean(errors.middleName)}
                    margin="normal"
                    padding="0"
                    variant="outlined"
                    className="textfield"
                  />
                  <TextField
                    id="standard-required"
                    style={textfield}
                    name="lastName"
                    label="Last name*"
                    placeholder="ex. Doe"
                    value={lastName}
                    onChange={handleChange}
                    helperText={touched.lastName ? errors.lastName : ""}
                    error={touched.lastName && Boolean(errors.lastName)}
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                  />
                  <TextField
                    id="standard-required"
                    style={textfield}
                    name="address1"
                    label="Street Address*"
                    placeholder="ex. 123 Ikea Avenue"
                    value={address1}
                    onChange={handleChange}
                    helperText={touched.address1 ? errors.address1 : ""}
                    error={touched.address1 && Boolean(errors.address1)}
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                  />
                  <TextField
                    id="standard"
                    style={textfield}
                    name="address2"
                    label="Unit/Apt. #"
                    value={address2}
                    onChange={handleChange}
                    helperText={touched.address2 ? errors.address2 : ""}
                    error={touched.address2 && Boolean(errors.address2)}
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                  />
                  <TextField
                    id="standard-required"
                    style={textfield}
                    name="city"
                    label="City*"
                    value={city}
                    onChange={handleChange}
                    helperText={touched.city ? errors.city : ""}
                    error={touched.city && Boolean(errors.city)}
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                  />
                  <br />
                  <TextField
                    style={textfield}
                    id="standard-select-state"
                    select
                    name="stateProviceGeoId"
                    label="State*"
                    value={stateProviceGeoId}
                    onChange={handleChange}
                    helperText={
                      touched.stateProviceGeoId ? errors.stateProviceGeoId : ""
                    }
                    error={
                      touched.stateProviceGeoId &&
                      Boolean(errors.stateProviceGeoId)
                    }
                    SelectProps={{
                      MenuProps: {
                        // className: classes.menu,
                      }
                    }}
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                  >
                    {states.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-required"
                    style={textfield}
                    name="postalCode"
                    label="Postal Code*"
                    placeholder="ex. 55555"
                    value={postalCode}
                    onChange={handleChange}
                    helperText={touched.postalCode ? errors.postalCode : ""}
                    error={touched.postalCode && Boolean(errors.postalCode)}
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                  />
                  <TextField
                    id="standard-email-input"
                    style={textfield}
                    label="E-mail*"
                    type="email"
                    name="emailAddress"
                    value={emailAddress}
                    onChange={handleChange}
                    helperText={touched.emailAddress ? errors.emailAddress : ""}
                    error={touched.emailAddress && Boolean(errors.emailAddress)}
                    placeholder="ex. hi@email.com"
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                  /> 
                  </div>
                      <center>
                      <div className="mainborder" >
                          <StripeCheckout
                            amount={parseInt(this.state.value * 100)}
                            panelLabel="Donate {{amount}}"
                            image=""
                            label="Donate Now"
                            locale="auto"
                            name="GND Donation"
                            stripeKey="pk_test_94XpbRPINz9LfTaFE0KPSolg"
                            token={this.onToken}
                            type="submit"
                          >
                            <Button className="contactusbutton" type="submit">
                              Donate Now
                            </Button>
                          </StripeCheckout>
                        </div>
                        <img src={StripeLogo} alt="Stripe-Logo" height="30" width="100"/>
                      </center>
                </Form>
              )}
            </Formik>
            <SEO title="Donate Now" />
          </center>
        </div>

        <div className="floatright" >
        <img src={Image1} alt="GND" height="320" width="600"/>
        <img src={Image2} alt="GND" height="320" width="600"/>
        <img src={Image3} alt="GND" height="320" width="600"/>
        </div>

      </Layout>
    );
  }
}

Donation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Donation);
