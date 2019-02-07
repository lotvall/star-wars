const fetch = require('node-fetch')

// const DataLoader = require ('dataloader')

// const peopleLoader = new DataLoader(() => {
//     return getEvents(eventIds)
// })
// const planetLoader = new DataLoader(() => {
//    return User.find({_id: {$in: userIds}})
// })

const resolvers = {

    person: async ({ personUrl }) => {

    },
    allPeople: async () => {

        try {
            const response = await fetch('https://swapi.co/api/people')
            const data = await response.json()
            const people = data.results
            return people.map((person) => {
                console.log(person)
                const planetUrl = person.homeworld
                return {
                    name: person.name,
                    url: person.url,
                    homeworld: planet(planetUrl)
                }
            })
        } catch(err) {
            throw err
        }
    },

    planet: async ( { planetUrl } ) => {
        console.log(planetUrl)
        try {
            const response = await fetch(planetUrl)
            const planet = await response.json()
            return {
                name: planet.name,
                url: planet.url,
            }
        } catch (err) {
            throw err
        }

    },

    allPlanets: async() => {
        try {
            const response = await fetch('https://swapi.co/api/planets')
            const data = await response.json()
            const allPlanets = data.results
            return allPlanets.map((planet) => {
                console.log(planet)
                const personUrls = planet.residents
                return {
                    name: planet.name,
                    url: planet.url,
                    residents: personUrls
                }
            })
        } catch(err) {
            throw err
        }
    }
}

module.exports = resolvers