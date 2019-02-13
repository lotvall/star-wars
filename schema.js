const { buildSchema } = require('graphql')

const schema = buildSchema(`

  type Person {
    url: String!
    name: String!
    homeworld: Planet!
    species: Species
  }
  type Species{
    name: String
    homeworld: Planet!
    people: [Person!]!
  }
  type Planet {
    url: String!
    name: String!
    residents: [Person!]!
  }

  type RootQuery {
    allPeople(pageNr: Int): [Person!]!
    peopleSearch(searchStr: String): [Person!]!
    person(personId: Int!): Person!

    allPlanets(pageNr: Int):[Planet!]!
    planet(planetId: Int!): Planet!
  }

  schema {
    query: RootQuery
  }
`);

module.exports = schema