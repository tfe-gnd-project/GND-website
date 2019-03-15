import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function googleCalendar(props) {
  const { classes } = props;

  return (
    <div>
      <Paper elevation={1} className="calendarBorder">
        <Typography variant="h5" component="h3">
          Calendar
        </Typography>
        <Typography component="p" className="calendarParagraph">
          Daily schedule for Guru Nanak Dwara.
          <br/>Please copy these Calendar Events to your personal calendar to receive reminders.
        </Typography>
        <div style={{display: "flex"}}>
         <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;mode=AGENDA&amp;src=2g6kruaui9ijo00m5rkias7c4k%40group.calendar.google.com&amp;ctz=America%2FPhoenix" className="calendarContainer" frameborder="0" scrolling="no"></iframe>
        </div>
      </Paper>
    </div>
  );
}
 googleCalendar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(googleCalendar);
