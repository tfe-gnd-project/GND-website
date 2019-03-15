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

function FacebookEvents(props) {
  const { classes } = props;

  return (
    <div>
      <Paper elevation={1} className="eventsBorder">
        <Typography variant="h5" component="h3">
          Events
        </Typography>
        <Typography component="p" className="eventsParagraph">
          Guru Nanak Dwara actively updates our Events Page and Calendar.
          <br/>We host world-renowned musicians, scholars, and teachers.
          <br/>Events are subject to change.
        </Typography>
        <div className="facebookContainerMobile">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgurunanakdwara%2F&tabs=events&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="330" height="370" style={{border: "none",overflow: "hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="facebookContainerIpad">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgurunanakdwara%2F&tabs=events&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="500" height="500" style={{border: "none", overflow: "hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="facebookContainerDesktop">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgurunanakdwara%2F&tabs=events&width=500&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="500" height="700" style={{border: "none", overflow: "hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
      </Paper>
    </div>
  );
}
 FacebookEvents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FacebookEvents);
