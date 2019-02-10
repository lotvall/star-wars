import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PlanetsList from '../components/PlanetsList'
import PeopleList from '../components/PeopleList'

import Spinner from '../components/Spinner'


const PLANETS_QUERY = gql`
    query PlanetsQuery ($nr: Int) {
        allPlanets (pageNr: $nr) {
            name
            url
            residents {
                name
            }
        }
    }
`

class PlanetsView extends Component { 
    state = {
        page: 0,
        isLoading: false,
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    render(){
        return (
            <>
                <Query query={PLANETS_QUERY} variables={{"nr": this.state.page + 1}}>
                    {
                        ({loading, error, data}) => {

                            if(loading) return data.allPlanets ? <PlanetsList loading={true} data={data.allPlanets} page={this.state.page} onChangePage={this.handleChangePage}/> : <Spinner />
                            if(error) console.log('there was an error', error)
                            if(data) console.log('we got the data', data.allPlanets[0].url)

                            const url = data.allPlanets[0].url
                            const id = url.replace(/[\D]/g, '');
                            console.log(id)

                            return <PlanetsList loading={false} data={data.allPlanets} page={this.state.page} onChangePage={this.handleChangePage}/>
                        }
                    }
                </Query>
            </>

        )
    }
}

export default PlanetsView
