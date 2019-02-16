import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PeopleList from '../components/PeopleList'
import Spinner from '../components/spinner/Spinner.js'
import Toolbar from '../components/Toolbar'

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
            species {
                name
            }
        }
    }
`

const PEOPLESEARCH_QUERY = gql`
    query PeopleSearch ($str: String!){
        peopleSearch(searchStr: $str) {
            name
            url
            homeworld {
                name
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
        queryStr:'',
    }

    handleChangePage = (page) => {
        this.setState({ page });
    };
    componentDidMount = () => {
        if(this.props.location.state) {
            const prevListPage = this.props.location.state.pageNr
            this.setState(()=> ({
                page:prevListPage
            }))
        }
    }
    handleSearchQuerySubmit = (query) => {
        console.log('submit', query)
        this.setState(() => ({
            queryStr: query
        }))
    }

    render(){
        const { classes} = this.props
        console.log('what page in render', +this.state.page)
         ? console.log('queryStr is truthy') : console.log('query st is falsy')
        
        const query = this.state.queryStr ? PEOPLESEARCH_QUERY : PEOPLE_QUERY
        const variables = this.state.queryStr ? {"str": this.state.queryStr } : {"nr": +this.state.page +1 }
        return (
            <>
                <Query query={query} variables={variables}>
                    {
                        ({loading, error, data}) => {


                            if(loading) return data.allPeople ? 
                                <PeopleList
                                    filters={this.state.queryStr || null}
                                    loading={true} 
                                    data={data.allPeople} 
                                    page={this.state.page} 
                                    onChangePage={this.handleChangePage}
                                /> 
                                : <Spinner />
                            if(error) console.log('there was an error', error)
                            if(data) {
                                console.log(data)                                
                                return(
                                    <> 
                                        <PeopleList
                                            filters={this.state.queryStr || null} 
                                            loading={false} 
                                            data={this.state.queryStr ? data.peopleSearch : data.allPeople} 
                                            page={this.state.page} onChangePage={this.handleChangePage} 
                                            onClick={this.handleListItemClick} 
                                            onSubmit={this.handleSearchQuerySubmit}
                                        />
                                    </>
                                )
                            }
                        }
                    }
                </Query>
            </>

        )
    }
}

export default withStyles(styles)(PeopleView)

