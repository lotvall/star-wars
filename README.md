# star-wars
React, GraphQL, Apollo app that uses the SWAPI API to display people and planets from Star Wars. 

TODO:
- [x] add dataloader to batch requests
- [x] add option to fetch more than only the first page in each view
- [x] navbar should render the correct selector based on route
- [x] add SpinnerView when fetching initial page
- [x] add Spinner in table footer when fetching subsequent pages
- [x] persist state between route links // perhaps change this to store in url instead of props throigh links
- [ ] fix bug - two searches in a row spinner view renders instead of minispinner

- [ ] finish PeopleView and SinglePersonView
- [ ] finish PlanetsView and SinglePlanetView
- [ ] refactor and clean up code
- [ ] navbar selector should not render tiny pixel when false
- [ ] add logic to be able to fetch and render more data per person and planet
- [ ] refactor resolvers to enable deeper nesting of queries
- [ ] add logic for movies, vehicles, starships etc...

