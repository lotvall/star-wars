import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight:'5px',
  },
  formControl: {
    display:'flex',
    justifyContent: 'flex-start',
    margin: theme.spacing.unit,
    minWidth: '1px',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 0,
    fontSize: 'smaller'
  },
});

class SimpleSelect extends React.Component {
    state = {
        age: '',
        name: 'hai',
        labelWidth: 0,
    };
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    

    render() {
        const { classes } = this.props;

        return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
            <Select
                value={this.state.age}
                onChange={this.handleChange}
                displayEmpty
                className={classes.selectEmpty}
            >
                <MenuItem value="">
                <em>Name</em>
                </MenuItem>
                <MenuItem value={10}>Planets</MenuItem>
                <MenuItem value={20}>Species</MenuItem>
                <MenuItem value={30}>Movies</MenuItem>
            </Select>
            
            </FormControl>
            
        </form>
        );
    }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
