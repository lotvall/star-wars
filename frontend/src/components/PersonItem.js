import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
      justifyContent:'center'
  }
});

const PersonItem = ({url, name, homeworld, classes}) => {
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
            
        </div>
    )
}


PersonItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PersonItem);