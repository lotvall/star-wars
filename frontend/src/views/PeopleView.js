import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PeopleList from '../components/PeopleList'
import Spinner from '../components/Spinner'

const styles = theme => {

}

const PEOPLE_QUERY = gql`
    query PeopleQuery ($nr: Int){
        allPeople (pageNr: $nr) {
            name
            url
            homeworld {
                name
            }
        }
    }
`

class PeopleView extends Component { 

    state = {
        page: 0,
        allPeople: [],
        isLoading: false,
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    render(){
        const { classes } = this.props
        const dummyPeople = [{}, {},{},{},{},{},{},{},{},{},]

        return (
            <>
                <Query query={PEOPLE_QUERY} variables={{"nr": this.state.page + 1}}>
                    {
                        ({loading, error, data}) => {

                            console.log(this.state.allPeople)
                            console.log('logging some data', data)

                            if(loading) return data.allPeople ? <PeopleList loading={true} allPeople={data.allPeople} page={this.state.page} onChangePage={this.handleChangePage}/> : <Spinner />
                            if(error) console.log('there was an error', error)
                            if(data) {
                                console.log('we got the data', this.state.pageNr)
                                
                                return <PeopleList loading={false} allPeople={data.allPeople} page={this.state.page} onChangePage={this.handleChangePage}/>
                            }
                        }
                    }
                </Query>
            </>

        )
    }
}

export default withStyles(styles)(PeopleView)

