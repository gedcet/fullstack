const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Blog = require('./models/modelBlog.js')
const app = require('./controllers/BlogController.js')

const mongoUrl = 'mongodb+srv://gedcet:Epmc740@cluster0.pcqn1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())



const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})