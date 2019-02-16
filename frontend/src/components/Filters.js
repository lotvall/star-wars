
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FilterChip from './FilterChip'

const styles = theme => ({
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '40px',
    paddingRight:'40px',
    height: '60px',
    borderBottom: '1px solid #eeeef0',

  },
})


const FilterBar = ({ classes, filters, onSubmit={onSubmit}}) => {

  return (
    <div className={classes.root}>

      <FilterChip filter={filters} onSubmit={onSubmit}/>
    </div>
    
  )
}

export default withStyles(styles) (FilterBar)