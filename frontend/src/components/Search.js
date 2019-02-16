import React, { Component } from 'react'

import {withStyles} from '@material-ui/core/styles'

import FilterMenu from './FilterMenu'

const styles = theme => ({
  form: {
    display: 'flex',
    alignItems: 'center',
    width: '300px'
  },
  input: {
  width: '100%',
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  resize: 'vertical',
  }
})

class Search extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
    const { classes, onSubmit} = this.props

   return (
     <div>
        <form
            className={classes.form}
            onSubmit={(event) => {
                event.preventDefault()
                onSubmit(this.state.query)
                event.target.reset()
            }}
        >
          <input
            className={classes.input}
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            
          />
        </form>
     </div>

   )
 }
}

export default withStyles(styles)(Search)
