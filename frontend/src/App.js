import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/NavBar'

const containerStyle = {
  width: '100%',
  display:'block',
  margin: 'auto'
}
const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
          <Router>
            
            <div className="container" style={{...containerStyle}}>
              <NavBar/>
              {/* <Route exact path='/' component={Launches}/>
              <Route exact path='/launch/:flight_number' component={Launch}/> */}


            </div>
          </Router>
        </ApolloProvider>
    );
  }
}

export default App;
