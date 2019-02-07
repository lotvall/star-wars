import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PeopleList from '../components/PeopleList'

const styles = theme => {

}

const PEOPLE_QUERY = gql`
    query PeopleQuery {
        allPeople {
            name
            url
            homeworld {
                name
            }
        }
    }
`

class PeopleView extends Component { 
    render(){
        const { classes } = this.props
        return (
            <>
                <h1 className="display-4 my-3">
                    People
                </h1>

                <Query query={PEOPLE_QUERY}>
                    {
                        ({loading, error, data}) => {

                            if(loading) return <h4>Loading....</h4>
                            if(error) console.log('there was an error', error)
                            if(data) console.log('we got the data', data)

                            return <PeopleList allPeople={data.allPeople} />
                        }
                    }
                </Query>
            </>

        )
    }
}

export default withStyles(styles)(PeopleView)

