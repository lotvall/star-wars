import React from 'react'
import PersonItem from './PersonItem'

const PeopleList = ({allPeople}) => {
    return (
        allPeople.map(person => (
            <PersonItem key={person.url} url= {person.url} name={person.name} homeworld={person.homeworld}/>
        ))
    )
}

export default PeopleList

