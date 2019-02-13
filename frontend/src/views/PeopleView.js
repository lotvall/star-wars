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
                url
            }
            species {
                name
            }
        }
    }
`


class PeopleView extends Component { 

    state = {
        page: 0,
        isLoading: false,
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };
    componentDidMount = () => {
        if(this.props.location.state) {
            const prevListPage= this.props.location.state.pageNr
            this.setState(()=> ({
                page:prevListPage
            }))
        }
    }

    render(){
        const { classes} = this.props
        
        return (
            <>
                <Query query={PEOPLE_QUERY} variables={{"nr": this.state.page + 1}}>
                    {
                        ({loading, error, data}) => {


                            if(loading) return data.allPeople ? <PeopleList loading={true} data={data.allPeople} page={this.state.page} onChangePage={this.handleChangePage}/> : <Spinner />
                            if(error) console.log('there was an error', error)
                            if(data) {
                                
                                return <PeopleList loading={false} data={data.allPeople} page={this.state.page} onChangePage={this.handleChangePage}/>
                            }
                        }
                    }
                </Query>
            </>

        )
    }
}

export default withStyles(styles)(PeopleView)

