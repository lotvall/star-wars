const fetch = require('node-fetch')
const DataLoader = require('dataloader')

const UrlLoader = new DataLoader(urls => 
    Promise.all(urls.map(getFromUrl)),
);
async function getFromUrl(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log('how many times is this called')
    return data
}
// UrlLoader.load("https://swapi.co/api/planets/1/")
// UrlLoader.load("https://swapi.co/api/planets/3/")
// UrlLoader.load("https://swapi.co/api/planets/4/")
// UrlLoader.load("https://swapi.co/api/planets/5/")
// UrlLoader.load("https://swapi.co/api/planets/13/")

const fetchPlanet = async (Url) => {
    console.log('how many times is this called (in direct fetch) ')

    const response = await fetch(Url)
    const unit = await response.json()
    return unit
}

const fetchPerson = async (personUrl) => {

    const response = await fetch(personUrl)
    const person = await response.json()

    return person
}

const resolvers = {

    person: async ({ personUrl }) => {
        const person = UrlLoader.load(personUrl)
        const homeworld = UrlLoader.load(person.homeworld)

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