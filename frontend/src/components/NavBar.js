import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    tabs: {
        display:'flex',
        justifyContent: 'center',

    },
});

class CenteredTabs extends React.Component {
  state = {
    value: false,
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentDidMount = () => {
    const path = this.props.location.pathname
    console.log('state/value ', this.state.value)
    if (path === '/planets') {
      console.log('if statement running')
      this.setState({
        value: 1
      })
    } else {
      console.log('else statement running')

      this.setState({
        value: 0
      })
    } 
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabs}
        >
          <Tab to="people" label="People" to='/people' component={Link} />
          <Tab to="planets" label="Planets" to='/planets' component={Link}/>
        </Tabs>
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(CenteredTabs))
