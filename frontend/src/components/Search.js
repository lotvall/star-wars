import React, { Component } from 'react'

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
     <form
        onSubmit={(event) => {
            event.preventDefault()
            onSubmit(this.state.query)
        }}
     >
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
         
       />
     </form>
   )
 }
}

export default Search
