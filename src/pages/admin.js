// import React from "react"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

// import Button from '@material-ui/core/Button';
// import axios from 'axios';


// const button = {
//   backgroundColor: "#0a2f6c",
//   color: 'white',
//   height: 50,
//   fontSize: 17,
//   marginTop: '15px',
// }

// class Admin extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       open: false,    
//     }
//   }
  

//   handleClickOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };


//   addNewsletter = () => {


//     axios.post(`http://localhost:8080//apps/NewPage/NewForm/addNewsletterEmailArray`)
//       .then(res => {
//           console.log(res);
//           console.log(res.data);
//           axios.post(`https://aneajwrqpa.execute-api.us-east-1.amazonaws.com/dev/newsletter`, res.data )
//             .then(res => {
//                 console.log(res);
//                 console.log(res.data);
//             })
//       })
//       .catch(error => {
//           console.error("Error:", error);
//       })
//   }


//   render() {
//     console.log("ADMIN: ", this.state.open)
//     return (
//       <Layout>
//         <SEO title="Admin"/>
//         <Button 
//           style={button} 
//           margin="normal"
//           variant="contained" 
//           onClick={this.addNewsletter}>
//             Send Newsletter
//         </Button>
//       </Layout>
//     );
//   }
// }


// export default Admin;




import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
