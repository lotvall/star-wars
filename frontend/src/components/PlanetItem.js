import React from 'react'

const PlanetItem = ({url, name, residents}) => {
    console.log(residents)
    return (
        <>
            <p>Planet: {name}</p>
            <p>Residents: {residents.length}</p>
        </>
    )
}

export default PlanetItem