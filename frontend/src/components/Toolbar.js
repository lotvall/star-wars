
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Search from './Search'
import Pagination from './Pagination'
import FilterMenu from './FilterMenu'
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '40px',
    paddingRight:'40px',
    height: '60px',
    borderBottom: '1px solid #eeeef0',
  },
  
})
const Toolbar = ({ classes, page, onChangePage, loading, onSubmit, filters}) => {
  console.log('logging page in pagination', page)
  console.log('filters', filters ? 'yes' : 'no')
  console.log('logging page in paginationagain ', page)

  return (
    <div className={classes.root}>
      <Search onSubmit={onSubmit}/>
      <Typography variant="h6">Star Wars People</Typography>
      <Pagination 
      loading= {loading}
      page={page}
      onChangePage={onChangePage}
      filters={filters}

      />
    </div>
    
  )
}
Pagination.propTypes = {
  onPageRequest: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    total_pages: PropTypes.number.isRequired,
    current_page: PropTypes.number.isRequired,
    total_count: PropTypes.number.isRequired,
    max_per_page: PropTypes.number.isRequired,
  }),
};

export default withStyles(styles) (Toolbar)