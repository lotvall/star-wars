const fetch = require('node-fetch')
const DataLoader = require('dataloader')

const UrlLoader = new DataLoader(urls => 
    Promise.all(urls.map(getFromUrl)),
);
async function getFromUrl(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const resolvers = {

    person: async ({ personId }) => {
        const person = await UrlLoader.load(`https://swapi.co/api/people/${personId}/`)
        const homeworld = await UrlLoader.load(person.homeworld)

        console.log('the homeworld',homeworld)
        // residents are an array of urls not an array of People~
        // cannot query: homeworld {residents { name } }
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
                const homeworld = UrlLoader.load(planetUrl)
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
                return UrlLoader.load(personUrl)
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
                    return UrlLoader.load(personUrl)
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