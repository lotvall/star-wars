import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

const FilterChip =({classes, filter, onSubmit}) => {
  return (
    <div className={classes.root}>
        <Chip
            label={filter}
            onDelete={(event) => {
                event.preventDefault()
                onSubmit('')
            }}
            className={classes.chip}
        />
    </div>
  );
}

export default withStyles(styles)(FilterChip);
