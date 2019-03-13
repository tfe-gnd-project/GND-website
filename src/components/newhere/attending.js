import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import OneDressModestly from "../../images/1-dress-modestly.png"
import TwoRemoveShoes from "../../images/2-remove-shoes.png"
import ThreeCoverHead from "../../images/3-cover-head.png"
import FourWashHands from "../../images/4-wash-hands.png"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} style={{backgroundColor: "#0a2f6cb0", margin: "auto", marginBottom: "20px", maxWidth: "95vw"}} elevation={1}>
        <Typography variant="title" style={{color: "white", textAlign: "center"}}>
          Attending Gurdwara Service
        </Typography>
        <Typography variant="subheading" style={{color: "white", textAlign: "center"}}>
          First time visiting Guru Nanak Dwara? Follow these four steps when entering.
        </Typography>
        <Typography variant="body1" style={{color: "white", display: "flex", justifyContent: "center"}}>
          <div className="attendingAllImagesAndText">
            <div className="attendingImagesAndText">
              <img className="attendingImages" src={OneDressModestly} alt="1-dress-modestly"/>
              <div className="attendingText">By coming into the Gurdwara, you are entering the Guru's royal court and joining the Sadh Sangat (company of the holy). Putting on modest, formal clothes is an outward projection of our internal respect for the Guru's court.</div>
            </div>
            <div className="attendingImagesAndText">
              <img className="attendingImages" src={TwoRemoveShoes} alt="2-remove-shoes"/>
              <div className="attendingText">Taking off our shoes &amp; socks before entering the Gurdwara has both a hygienic, practical effect of keeping the Gurdwara clean and a reverent, spiritual effect of leaving the outside world behind.</div>
            </div>
            <div className="attendingImagesAndText">
              <img className="attendingImages" src={ThreeCoverHead} alt="3-cover-head"/>
              <div className="attendingText">Putting on a head cover gives form to the understanding that the head is the crown of our consciousness. In Gurdwara, this signifies that we honor and protect the seat of our spiritual awareness.</div>
            </div>
            <div className="attendingImagesAndText">
              <img className="attendingImages" src={FourWashHands} alt="4-wash-hands"/>
              <div className="attendingText">Cleanliness is next to Godliness. By cleaning our hands and feet before we enter the Gurdwara we sanitize our bodies so we can cleanse our spirits.</div>
            </div>
          </div>
        </Typography>     
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
