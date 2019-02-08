const { buildSchema } = require('graphql')

const schema = buildSchema(`

  type Person {
    url: String!
    name: String!
    homeworld: Planet!
  }
  type Planet {
    url: String!
    name: String!
    residents: [Person!]!
  }

  type RootQuery {
    allPeople(pageNr: Int): [Person!]!
    person(personUrl: String!): Person!

    allPlanets(pageNr: Int):[Planet!]!
    planet(planetUrl: String!): Planet!
  }

  schema {
    query: RootQuery
  }
`);

module.exports = schema