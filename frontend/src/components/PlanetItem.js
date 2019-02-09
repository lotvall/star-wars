import React from 'react'

const PlanetItem = ({url, name, residents}) => {
    console.log(residents)
    return (
        <>
        <div>
            <p>Planet: {name}</p>
            <p>Residents: {residents.length}</p>
            {residents.map(resident => {
                return <p>{resident.name}</p>
            })}
            <p>---------------</p>
        </div>
        </>
    )
}

export default PlanetItem