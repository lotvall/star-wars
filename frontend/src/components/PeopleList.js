import React, { Component } from 'react'
import PropTypes from 'prop-types';
import PeopleListItem from './PeopleListItem'
import Toolbar from './Toolbar.js'
import FilterBar from './Filters'

class PeopleList extends Component {
  render() {
    const { classes , data, page, onChangePage, loading, onSubmit, filters } = this.props;
    console.log('problem is here PL', data)
    return (
      <div>
        <Toolbar 
          loading={loading}
          page={page} 
          onChangePage={onChangePage}
          onSubmit={onSubmit}
          filters={filters}
        />
        {filters && <FilterBar 
          filters={filters}
          onSubmit={onSubmit}

        />}
        {data.map(person => (
          <PeopleListItem person={person} key={person.url} page={page} />
        ))}
      </div>
    )
  }
}

export default PeopleList