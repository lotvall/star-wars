import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '80%',
    justifyContent: 'center',

  },
  div:{
      display: 'flex',
      justifyContent:'center',
      flexWrap: 'wrap'

  }
});

const PersonItem = ({id, url, name, homeworld, classes, pageNr}) => {
    console.log('pagenr in personitem',pageNr)
    return (
        <div className={classes.div}>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h5">
                    {name}
                </Typography>
               <hr/>

                <Typography variant="h6" component="h5">
                    {homeworld.name}
                </Typography>

            </Paper>

            <Button style={{width: '300px'}} component={Link} to={{ pathname: '/people', state: { pageNr: pageNr} }} variant="contained" color="primary" className={classes.button}>Back</Button>

            
        </div>
    )
}


PersonItem.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(PersonItem);