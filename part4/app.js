const http = require('http')
const express = require('express')
const cors = require('cors')
const Blog = require('./models/modelBlog.js')
const db1  = require('./dataBases/db1.js')

//const totalLikes = require('./utils/totallikes.js')
db1.connectToDB()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3003
const lisnerID = app.listen(PORT, () =>
{
  console.log(`Server running on port ${PORT}`)
})

module.exports = { lisnerID } 
