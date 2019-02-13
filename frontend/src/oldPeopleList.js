import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination'

import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

import Spinner from './MiniSpinner'
import Avatar from './LetterAvatar'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '90%',
    overflowX: 'auto',
    justifyContent: 'center',
    elevation: 0,
    
    
  },
  div: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },
  tablecell: {
  },
});

// const MyLink = props => <Link to={"`/people/${person.url.replace(/[\D]/g, '')}`"} {...props} />


const actionsStyles = theme => ({
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5,
    },
  });
  
  class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
      this.props.onChangePage(event, 0);
    };
  
    handleBackButtonClick = event => {
      this.props.onChangePage(event, this.props.page - 1);
    };
  
    handleNextButtonClick = event => {
      this.props.onChangePage(event, this.props.page + 1);
    };
  
    handleLastPageButtonClick = event => {
      this.props.onChangePage(
        event,
        Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
      );
    };
  
    render() {
      const { classes, count, page, rowsPerPage, theme } = this.props;
  
      return (
        <div className={classes.root}>
          <IconButton
            onClick={this.handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="First Page"
          >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton
            onClick={this.handleBackButtonClick}
            disabled={page === 0}
            aria-label="Previous Page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            onClick={this.handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Next Page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
          <IconButton
            onClick={this.handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Last Page"
          >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </div>
      );
    }
  }
  
  TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
    TablePaginationActions,
  );
  



class SimpleTable extends Component {
    

    render() {
        const { classes , data, page, onChangePage, loading } = this.props;

        return (
            <div className={classes.div}>
            <Paper className={classes.root} elevation={1}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow className={classes.table}>
              <TableCell align="right">
                { 
                  loading && <Spinner/>                 
                }
              </TableCell>

                <TablePagination
                  rowsPerPageOptions={[10]}
                  colSpan={2}
                  count={87}
                  rowsPerPage={10}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={onChangePage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
                </TableHead>
                <TableBody>
                {data.map(person => (
                    <TableRow key={person.url} >
                    <TableCell  component="th" scope="row" className={classes.tablecell}>
                      <Avatar />
                    </TableCell>
                    <TableCell  component="th" scope="row" className={classes.tablecell}>
                    <Button component={Link} to={{pathname: `/people/${person.url.replace(/[\D]/g, '')}`, state: {sourcePath:"/people", pageNr: page}}} color="primary" className={classes.button}>{person.name}</Button>
                    </TableCell>
                    <TableCell className={classes.tablecell}>
                    <Button component={Link} to={{pathname: `/planets/${person.homeworld.url.replace(/[\D]/g, '')}`, state: {sourcePath:"/people", pageNr: page}}} color="primary" className={classes.button}>{person.homeworld.name}</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </Paper>
            </div>

        );
    }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);

