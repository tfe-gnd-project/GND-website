// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import tileData from './tileData';
// import '../../assets/photos.css'

// const styles = theme => ({
//   root: {
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit * 2,
//     paddingBottom: theme.spacing.unit * 2,
//     margin: "10px",
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     flexWrap: 'nowrap',
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: 'translateZ(0)',
//   },
//   title: {
//     color: "white",
//   },
//   titleBar: {
//     background:
//       'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
// });

// // function SingleLineGridList(props) {
// //   const { classes } = props;

// class SingleLineGridList extends React.Component {
//   state = {
//     open: false,
//   };

//   handleClickOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <Paper className={classes.root}>
//       <ListSubheader component="div">Guru Gobind Singh Ji Gurpurabh 2019 - January 9, 2019</ListSubheader>
//         <GridList className={classes.gridList} cols={2.5}>
//           {tileData.map(tile => (
//             <GridListTile key={tile.img}>
//               <img src={tile.img} alt={tile.title} />
//               <GridListTileBar
//                 title={tile.title}
//                 classes={{
//                   root: classes.titleBar,
//                   title: classes.title,
//                 }}
//                 actionIcon={
//                   <IconButton onClick={this.handleClickOpen}>
//                     <StarBorderIcon  className={classes.title} />
//                   </IconButton>
//                 }
//               />
//               {console.log(tile.title)}
//               <Dialog
//                 onClose={this.handleClose}
//                 aria-labelledby="customized-dialog-title"
//                 open={this.state.open}
//               >
//                 <DialogContent>
//                   <img className="gridlistimage" src={tile.img} alt={tile.title} />
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={this.handleClose} color="primary">
//                     Close
//                   </Button>
//                 </DialogActions>
//               </Dialog>
//             </GridListTile>
//           ))}
//         </GridList>
//       </Paper>
//     );
//   }
// }

// SingleLineGridList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SingleLineGridList);


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import tileData from './tileData';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>

        {tileData.map(tile => (            
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div style={getModalStyle()} className={classes.paper}>
            <img src={tile.img} alt={tile.title} />
            </div>
          </Modal>
        ))}
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
