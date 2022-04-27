const mongoose = require('mongoose')
const db1 = require('../dataBases/db1.js')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

//kad pakeisti middleware
blogSchema.set('toJSON', {
  transform: (document, returnedObject) => 
  {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Blog = db1.connectionID.model('Blog', blogSchema)

module.exports = Blog