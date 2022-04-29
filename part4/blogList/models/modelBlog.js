const config = require('../utils/config')
const mongoose = require('mongoose')

const mongooseConnection = mongoose.createConnection(config.MONGODB_URI)


const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

const modelBlog = mongooseConnection.model('Blog', blogSchema)

module.exports =  {modelBlog, mongooseConnection }
