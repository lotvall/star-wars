
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import MiniSpinner from './MiniSpinner'
import Search from './Search'

const styles = theme => ({
  root:{
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '40px',
    paddingRight:'40px',
  },
  pagination:{
    display: 'flex',
    justifyContent: 'flex-end',
  },
  typography: {
    display:'flex',
    alignItems:'center',    
    marginLeft: '5px',
    marginRight: '5px',
    minWidth: '68px',
    justifyContent: 'flex-end'
  },
  icon:{
    heigh:'18px',
    width:'18px'
  },
  iconbutton: {
    width: '28px',
    height: '28px',
    padding:0,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
})
const Pagination = ({ classes , data, page, onChangePage, loading, onSubmit, searching}) => {
  console.log('logging page in pagination', page)
  const firstOnPage = page*10+1
  const lastOnPage = 8 ? 87 : page*10+10
  console.log('logging page in paginationagain ', page)

  return (
    <div className={classes.root}>
      <Search onSubmit={onSubmit}/>
      <div className={classes.pagination}>
      { loading ? <MiniSpinner /> : searching ? <div style={{border: '2px solid blue', heigh:'48px', width:'28px'}}> </div> : <div style={{heigh:'48px', width:'28px'}}> </div>}
      <Typography className={classes.typography} variant="caption">{firstOnPage} - {lastOnPage} of 87</Typography>
      <IconButton
        className={classes.iconbutton}
        onClick={() => onChangePage(0)}
        disabled={page === 0}
        aria-label="First Page"
      >
        <FirstPageIcon
          className={classes.icon}
        />
      </IconButton>
      <IconButton
        className={classes.iconbutton}
        onClick={() => onChangePage(page-1)}
        disabled={page === 0}
        aria-label="Previous Page"
      >
        <KeyboardArrowLeft
          className={classes.icon}
        />
      </IconButton>
      <IconButton
        className={classes.iconbutton}
        onClick={() => onChangePage(page+1)}
        disabled={page === 8}
        aria-label="Next Page"
      >
        <KeyboardArrowRight
          className={classes.icon}
        />
      </IconButton>
      <IconButton
        className={classes.iconbutton}
        onClick={() => onChangePage(8)}
        disabled={page === 8}
        aria-label="Next Page"
      >
        <LastPageIcon
          className={classes.icon}
        />
      </IconButton>
      </div>
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

export default withStyles(styles) (Pagination)