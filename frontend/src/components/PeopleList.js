import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Avatar from './LetterAvatar'
import PeopleListItem from './PeopleListItem'

class PeopleList extends Component {
  render() {
    const { classes , data, page, onChangePage, loading } = this.props;

    return (
      <div>
        {data.map(person => (
          <PeopleListItem person={person} key={person.url}/>
        ))}
      </div>
    )
  }
}

export default PeopleList