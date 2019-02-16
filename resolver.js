const fetch = require('node-fetch')
const DataLoader = require('dataloader')

const UrlLoader = new DataLoader(urls => 
    Promise.all(urls.map(getFromUrl)),
);
async function getFromUrl(url) {
    console.log('get from url was called', url)
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const resolvers = {

    person: async ({ personId }) => {
        const person = await UrlLoader.load(`https://swapi.co/api/people/${personId}/`)
        const homeworld = await UrlLoader.load(person.homeworld)
        const species = person.species.length > 1 ? UrlLoader.load(person.species) : 'Unkown species'


        // residents are an array of urls not an array of People~
        // cannot query: homeworld {residents { name } }
        return {
            name: person.name,
            url: person.url,
            homeworld,
            species
        }

    },
    peopleSearch: async ({ searchStr }) => {
        try {
            const response = await fetch(`https://swapi.co/api/people/?search=${searchStr}`)
            const data = await response.json()
            const people = data.results
            console.log(people)
            return people.map((person) => {
                const planetUrl = person.homeworld
                const homeworld = UrlLoader.load(planetUrl)
                console.log(person.species)
                const species = person.species.length > 0 ? UrlLoader.load(person.species[0]) : {name: 'Unkown species'}
                return {
                    name: person.name,
                    url: person.url,
                    homeworld,
                    species
                }
            })
        } catch(err) {
            throw err
        }
    },
    allPeople: async ({ pageNr }) => {
        try {
            const response = await fetch(`https://swapi.co/api/people/?page=${pageNr}`)
            const data = await response.json()
            const next = data.next
            const count = data.count
            const previous = data.previous

            const people = data.results
            return people.map((person) => {
                const planetUrl = person.homeworld
                const homeworld = UrlLoader.load(planetUrl)
                console.log(person.species)
                const species = person.species.length > 0 ? UrlLoader.load(person.species[0]) : {name: 'Unkown species'}
                return {
                    name: person.name,
                    url: person.url,
                    homeworld,
                    species
                }
            })
        } catch(err) {
            throw err
        }
    },

    planet: async ( { planetId } ) => {
        try {

            const response = await fetch(`https://swapi.co/api/planets/${planetId}/`)
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