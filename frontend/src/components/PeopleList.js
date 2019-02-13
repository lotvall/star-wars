import React, { Component } from 'react'
import PropTypes from 'prop-types';
import PeopleListItem from './PeopleListItem'
import ListPagination from './Pagination'
class PeopleList extends Component {
  render() {
    const { classes , data, page, onChangePage, loading, onSubmit } = this.props;
    console.log('problem is here PL', data)
    return (
      <div>
        <ListPagination 
          loading={loading}
          page={page} 
          onChangePage={onChangePage}
          onSubmit={onSubmit}
        />
        {data.map(person => (
          <PeopleListItem person={person} key={person.url} page={page} />
        ))}
      </div>
    )
  }
}

export default PeopleList