import React from 'react'
import PlanetItem from './PlanetItem.js'

const PlanetsList = ({allPlanets}) => {
    return (
        allPlanets.map(planet => (
            <PlanetItem key={planet.url} url= {planet.url} name={planet.name} residents={planet.residents}/>
        ))
    )
}

export default PlanetsList

