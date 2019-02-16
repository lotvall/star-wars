import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import MiniSpinner from './spinner/MiniSpinner'

const styles = theme => ({
  pagination:{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  typography: {
    display:'flex',
    alignItems:'center',    
    marginLeft: '5px',
    marginRight: '5px',
    minWidth: '68px',
    justifyContent: 'flex-end'
  },
  // icon:{
  //   heigh:'18px',
  //   width:'18px'
  // },
  // iconbutton: {
  //   width: '28px',
  //   height: '28px',
  //   padding:0,
  //   display:'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
})


const Pagination = ({classes, loading, searching, page, onChangePage, filters}) => {
  const firstOnPage = page*10+1
  const lastOnPage = 8 ? 87 : page*10+10
    return(
        <div className={classes.pagination}>
      { loading ? <MiniSpinner /> : searching ? <div style={{border: '2px solid blue', heigh:'48px', width:'28px'}}> </div> : <div style={{heigh:'48px', width:'28px'}}> </div>}
      <Typography className={classes.typography} variant="caption">{firstOnPage} - {lastOnPage} of 87</Typography>
      <IconButton
        className={classes.iconbutton}
        onClick={() => onChangePage(0)}
        disabled={filters || page === 0 }
        aria-label="First Page"
      >
        <FirstPageIcon
          className={classes.icon}
        />
      </IconButton>
      <IconButton
        className={classes.iconbutton}
        onClick={() => onChangePage(page-1)}
        disabled={filters || page === 0}
        aria-label="Previous Page"
      >
        <KeyboardArrowLeft
          className={classes.icon}
        />
      </IconButton>
      <IconButton
        className={classes.iconbutton}
        onClick={() => onChangePage(page+1)}
        disabled={filters || page === 8}
        aria-label="Next Page"
      >
        <KeyboardArrowRight
          className={classes.icon}
        />
      </IconButton>
      <IconButton
        className={classes.iconbutton}
        onClick={() => onChangePage(8)}
        disabled={filters || page === 8}
        aria-label="Next Page"
      >
        <LastPageIcon
          className={classes.icon}
        />
      </IconButton>
      </div>
    )
}
export default withStyles(styles) (Pagination)
