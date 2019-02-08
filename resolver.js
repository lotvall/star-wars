const fetch = require('node-fetch')
// const DataLoader = require ('dataloader')

const fetchPlanet = async (planetUrl) => {
    const response = await fetch(planetUrl)
    const planet = await response.json()
    return planet
}

const fetchPerson = async (personUrl) => {

    const response = await fetch(personUrl)
    const person = await response.json()

    return person
}

const resolvers = {

    person: async ({ personUrl }) => {
        const person = await fetchPerson(personUrl)
        const homeworld = await fetchPlanet(person.homeworld)

        return {
            name: person.name,
            url: person.url,
            homeworld
        }

    },
    allPeople: async ({ pageNr }) => {
        console.log('logging the page number', pageNr)
        try {
            const response = await fetch(`https://swapi.co/api/people/?page=${pageNr}`)
            const data = await response.json()
            const people = data.results
            return people.map((person) => {
                const planetUrl = person.homeworld
                const homeworld = fetchPlanet(planetUrl)
                return {
                    name: person.name,
                    url: person.url,
                    homeworld
                }
            })
        } catch(err) {
            throw err
        }
    },

    planet: async ( { planetUrl } ) => {
        try {

            const response = await fetch(planetUrl)
            const planet = await response.json()
            const residents = planet.residents.map(personUrl => {
                return fetchPerson(personUrl)
            })
            return {
                name: planet.name,
                url: planet.url,
                residents 
            }
        } catch (err) {
            throw err
        }

    },

    allPlanets: async({pageNr}) => {
        try {
            console.log('logging planetpagenr', pageNr)
            const response = await fetch(`https://swapi.co/api/planets/?page=${pageNr}`)
            const data = await response.json()
            const allPlanets = data.results
            return allPlanets.map((planet) => {
                const personUrls = planet.residents
                const residents = personUrls.map((personUrl) => {
                    return fetchPerson(personUrl)
                })
                return {
                    name: planet.name,
                    url: planet.url,
                    residents
                }
            })
        } catch(err) {
            throw err
        }
    }
}

module.exports = resolvers