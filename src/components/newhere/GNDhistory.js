import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});


class GNDhistory extends React.Component {
  state = {
    checked: false,
    expanded: false
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded, checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div>
        <Paper className={classes.root} elevation={1} style={{margin: "auto", marginBottom: "20px", marginTop: "15px", maxWidth: "95vw"}}>
          <Collapse in={checked} collapsedHeight="150px">
            <Typography variant="title" style={{textAlign: "center", marginBottom: "10px"}}>
              History of Guru Nanak Dwara
            </Typography>           
            <Typography component="p" style={{textAlign: "justify"}}>
              Guru Nanak Dwara was founded in 1970 as an Ashram (spiritual learning center) committed to practicing both the Sikh way of life and Kundalini Yoga as taught by Yogi Bhajan. In the early days, many of those attracted to Guru Nanak Dwara were the soul-searching youth of the consciousness revolution. Guru Nanak Dwara was unlike other collectives of the time as it provided a drug and alcohol free environment where spiritual discipline (daily Sadhana) and selfless service (Seva) were the means of peace, calm and delight. Bonds of support were formed through countless hours of meditation, singing, cooking, working and eating together.
              <br/><br/>
              In 1972, Darshan Singh Teji, a good friend of Yogi Bhajan’s, helped the Ashram members establish a Gurdwara. With loving attention, he instructed them in the proper care and ceremonies surrounding the Guru, which has proven to be a guiding light these many years. By 1980, the land where Guru Nanak Dwara currently resides, was purchased and the community focused on creating a ‘village lifestyle’, with many family dwellings surrounding the main center.
              <br/><br/>
              By the mid-80s, Sikhs originally from Punjab India, were attracted in large numbers to Guru Nanak Dwara, mainly due to the feeling of peaceful contemplation emanating from the community’s practices. The new Guru Nanak Dwara structure began in 1996 to provide the community with the infrastructure necessary for a bright and flourishing future, embracing the traditions of both East and West. The dynamic blend of a devotional Sadh Sangat (company of the holy), the sacred scriptures of the Sikhs, a healthy lifestyle, and Kundalini Yoga is unique and enables Guru Nanak Dwara to be a place of peace and refuge in service to the greater community.
            </Typography>
          </Collapse>
          <center>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </center>
        </Paper>
      </div>
    );
  }
}

GNDhistory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GNDhistory);
