import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "../assets/contact.css";


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
  width: 420,
  textAlign: `center`,
  

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

  render() {
    const classes = this.props;
    return (
      <Layout>
        <div>
          <div className="contactbanner">
            <img
              src="/images/tfegndbanner.png"
              alt="Banner"
              style={{ marginTop: 30, borderRadius: 15 }}
            /> <div className="centered">CONTACT US<br/><span style={{fontSize: 20}}>Phone: 555-555-5555 </span></div>
            </div>
            <form className={classes.container}
        style={{
          marginTop: 10,
          marginBottom: 150,
          padding: `15px 25px`,
          backgroundColor: `white`,
          borderRadius: 15
        }}
        className="customerinfofield">
              <TextField style={textfield}
                    id="standard-required"
                    label="First name*"
                    placeholder="ex. John"
                    margin="normal"
                    variant="outlined"
              />
      
              <TextField style={textfield}
                    id="standard-required"
                    label="Last name*"
                    placeholder="ex. John"
                    margin="normal"
                    variant="outlined"
                    className="textfield"
              />
           <br/>
                  <TextField style={textfield}
                    id="standard-email-input"
                    label="E-mail*"
                    type="email"
                    placeholder="ex. hi@email.com"
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                    />
                 
                  <TextField style={textfield}
                    id="standard-phone-input"
                    label="Phone Number*"
                    type="tel"
                    placeholder="ex. 555-555-5555"
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                    />
                    <br/>
                    <TextField 
                    style={{width: `100%`}}
                    id="standard-select-questions"
                    select
                    fullWidth
                    label="Type of Question"
                    SelectProps={{
                    // MenuProps: {className: classes.menu}
                    }}
                    margin="normal"
                    variant="outlined"
                    className="textfield"
                    >
                      {questions.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <br/>
                    <TextField
                    style={{width: `100%`}}
                    id="outlined-full-width"
                    label="I have a question about..."
                    placeholder="Placeholder"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
            </form>

            <SEO title="Contact Us" />
            <Link to="/contact/">Contact Page</Link>
        </div>
      </Layout>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);

