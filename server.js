const express = require('express')
const graphqlHttp = require('express-graphql')
const schema = require('./schema')
const graphqlResolvers = require('./resolver')

// const cors = require('cors') not needed yet
const path = require('path')

const app = express();

// app.use(cors()) not needed yet

app.use('/graphql', graphqlHttp({
  schema,
  rootValue: graphqlResolvers,
  graphiql: true
}));

app.use(express.static('public'))

// app.get('*',(req, res) => {
//   res.sendFile(path.resovle(__dirname, 'public', 'index.html'))
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`server started on port: ${PORT}`));