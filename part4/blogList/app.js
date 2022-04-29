const express = require('express')
const cors = require('cors')
const modelBlog = require('./models/modelBlog')
const router_blogs = require('./controllers/controllerBlogs')

const express1 = express()

//middlewear
express1.use(cors())
express1.use(express.json())

express1.use("/api/blogs", router_blogs)

module.exports = express1