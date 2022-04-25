const http = require('http')
const express = require('express')
const cors = require('cors')
const blogController = require('./controllers/BlogController')

//const totalLikes = require('./utils/totallikes.js')
//db1.connectToDB()

const app = express()

//middleware
app.use(cors())
app.use(express.json())

//endpoint
app.get("/api/blogs", blogController.getAllrecord)
app.post("/api/create", blogController.AddRecord)

const PORT = 3003
const lisnerID = app.listen(PORT, () =>
{
  //console.log(`Server running on port ${PORT}`)
})

module.exports = { lisnerID, app } 
