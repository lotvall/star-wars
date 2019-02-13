import React, { Component } from 'react';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Spinner from '../components/Spinner'
import PersonItem from '../components/PersonItem'



const PERSON_QUERY = gql`
    query PersonQuery ($id: Int!) {
        person (personId: $id) {
            name
            url
            homeworld {
              name
              url
              
            }
        }
    }
`

class SinglePersonView extends Component {
    state = {
        id: null,
        isLoading: false,
    }

    render() {

        const id = parseInt(this.props.match.params.person_url)
        console.log(id)
        const pageNr = this.props.location.state ? this.props.location.state.pageNr : 0


        return(
            <>
            
            <Query query={PERSON_QUERY} variables={{"id": id}}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <Spinner/>
                        if(error) console.log('there was an error', error)
                        if(data) console.log(data)
                        const {name, homeworld, url} = data.person
                        return <PersonItem originalView={true} pageNr={pageNr} name={name} homeworld={homeworld} url={url} id={id}/>
                    }
                }
            </Query>
            </>
        )
    }
}

export default SinglePersonView