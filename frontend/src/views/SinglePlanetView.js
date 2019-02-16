import React, { Component } from 'react';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Spinner from '../components/spinner/Spinner'
import PlanetItem from '../components/PlanetItem';



const PLANET_QUERY = gql`
    query PlanetQuery ($id: Int!) {
        planet (planetId: $id) {
            name
            url
            residents {
              name
              url
              
            }
        }
    }
`

class SinglePlanetView extends Component {
    state = {
        id: null,
        isLoading: false,
    }

    render() {

        const id = parseInt(this.props.match.params.planet_url)

        console.log(id)
        const pageNr = this.props.location.state ? this.props.location.state.pageNr : 0
        const sourcePath = this.props.location.state ? this.props.location.state.sourcePath : "/people"

        return(
            <>
            
            <Query query={PLANET_QUERY} variables={{"id": id}}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <Spinner/>
                        if(error) console.log('there was an error', error)
                        if(data) console.log(data)
                        const {name, residents, url} = data.planet
                        return <PlanetItem  sourcePath={sourcePath} pageNr={pageNr} name={name} residents={residents} url={url} id={id}/>
                    }
                }
            </Query>
            </>
        )
    }
}

export default SinglePlanetView