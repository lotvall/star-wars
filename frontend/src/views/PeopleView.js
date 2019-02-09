import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PeopleList from '../components/PeopleList'

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
        page: 0
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

                            if(loading) return <h1>add spinner or LoadingList here....</h1>//add spinner here
                            if(error) console.log('there was an error', error)
                            if(data) console.log('we got the data', this.state.pageNr)

                            return <PeopleList allPeople={data.allPeople} page={this.state.page} onChangePage={this.handleChangePage}/>
                        }
                    }
                </Query>
            </>

        )
    }
}

export default withStyles(styles)(PeopleView)

