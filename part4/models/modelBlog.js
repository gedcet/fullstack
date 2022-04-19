const mongoose = require('mongoose')
const db1 = require('../dataBases/db1.js')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = db1.connectionID.model('Blog', blogSchema)

module.exports = Blog