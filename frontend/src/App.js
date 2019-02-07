import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import PeopleView from './views/PeopleView.js'
import PlanetsView from './views/PlanetsView.js'


const containerStyle = {
  width: '100%',
  display:'block',
  margin: 'auto'
}
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
          <Router>
            
            <div className="container" style={{...containerStyle}}>
              <NavBar />
              <Switch>
                {<Redirect from="/" to="/people" exact/>}

                <Route path ="/people" component={PeopleView} />
                <Route path ="/planets" component={PeopleView} />
              </Switch>

            </div>
          </Router>
        </ApolloProvider>
    );
  }
}

export default App;
