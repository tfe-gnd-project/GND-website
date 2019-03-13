import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import bana from "../../images/bana.png"
import bani from "../../images/bani.png"
import simran from "../../images/simran.png"
import seva from "../../images/seva.png"
import gatka from "../../images/gatka.png"
import yoga from "../../images/yoga.png"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function DailyPractice(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1} style={{margin: "auto", marginBottom: "20px", maxWidth: "95vw"}}>
        <Typography variant="title" style={{textAlign: "center"}}>
          Our Daily Practice
        </Typography>
        <Typography variant="subheading" style={{textAlign: "center"}}>
          A way of life dedicated to health, happiness and holiness.
        </Typography>
        <Typography variant="body1" style={{display: "flex", justifyContent: "center"}}>
          <div className="practiceAllImagesAndText">
            <div className="practiceImagesAndText">
              <img className="practiceImages" src={bana} alt="bana"/>
              <div className="practiceTextMiddle">Bana</div>
              <div className="practiceText">Sikh Uniform</div>
            </div>
            <div className="practiceImagesAndText">
              <img className="practiceImages" src={bani} alt="bani"/>
              <div className="practiceTextMiddle">Bani</div>
              <div className="practiceText">Scriptures Recited Daily</div>
            </div>
            <div className="practiceImagesAndText">
              <img className="practiceImages" src={simran} alt="simran"/>
              <div className="practiceTextMiddle">Simran</div>
              <div className="practiceText">Continuous Meditation</div>
            </div>
            <div className="practiceImagesAndText">
              <img className="practiceImages" src={seva} alt="seva"/>
              <div className="practiceTextMiddle">Seva</div>
              <div className="practiceText">Selfless Service</div>
            </div>
            <div className="practiceImagesAndText">
              <img className="practiceImages" src={gatka} alt="gatka"/>
              <div className="practiceTextMiddle">Gatka</div>
              <div className="practiceText">Sikh Martial Art</div>
            </div>
            <div className="practiceImagesAndText">
              <img className="practiceImages" src={yoga} alt="yoga"/>
              <div className="practiceTextMiddle">Yoga</div>
              <div className="practiceText">Union with the Infinite</div>
            </div>
          </div>
        </Typography>     
      </Paper>
    </div>
  );
}

DailyPractice.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DailyPractice);
