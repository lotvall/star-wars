import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import PeopleView from './views/PeopleView.js'
import PlanetsView from './views/PlanetsView.js'
import SinglePersonView from './views/SinglePersonView.js'
import SinglePlanetView from './views/SinglePlanetView.js'


const containerStyle = {
  width: '100%',
  display:'block',
  margin: 'auto'
}
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  shouldBatch: true,

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

                <Route exact path ="/people" component={PeopleView } />
                <Route exact path ="/planets" component={PlanetsView} />

                <Route exact path='/people/:person_url' component={SinglePersonView}/>
                <Route exact path='/planets/:planet_url' component={SinglePlanetView}/>
              </Switch>

            </div>
          </Router>
        </ApolloProvider>
    );
  }
}

export default App;
