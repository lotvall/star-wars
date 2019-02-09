import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PlanetsList from '../components/PlanetsList'
import Spinner from '../components/Spinner'


const PLANETS_QUERY = gql`
    query PlanetsQuery {
        allPlanets(pageNr: 1) {
            name
            url
            residents {
                name
            }
        }
    }
`

class PlanetsView extends Component { 
    render(){
        return (
            <>

                <Query query={PLANETS_QUERY}>
                    {
                        ({loading, error, data}) => {

                            if(loading) return <h4>Loading....</h4>
                            if(error) console.log('there was an error', error)
                            if(data) console.log('we got the data', data)

                            return <Spinner /> // <PlanetsList allPlanets={data.allPlanets} />
                        }
                    }
                </Query>
            </>

        )
    }
}

export default PlanetsView
