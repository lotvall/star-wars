import React from 'react'

const PersonItem = ({url, name, homeworld}) => {
    return (
        <>
            <p>{name}</p>
            <p>{homeworld.name}</p>
            <p>{url}</p>
        </>
    )
}

export default PersonItem