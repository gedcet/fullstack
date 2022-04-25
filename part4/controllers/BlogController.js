const Blog = require('../models/modelBlog.js')
const app = require('../app.js')

const getAllrecord = function (request, response)
{
    Blog
        .find({})
        .then((result, error) =>
        {
            if (error !== undefined)
            {
                response.status(408)
                response.end()
            }
            else
            {
                response.json(result)
            }
        })
}

const AddRecord = function (request, response) 
{
    Blog
        .create({
            "title": request.body.title,
            "author": request.body.author,
            "url": request.body.url,
            "likes": request.body.likes
        })
        .then((result, error) =>
        {
            if (error !== undefined)
            {
                response.status(401)
                response.end()
            }
            else
            {
                response.status(208)
                response.json(result)
            }
        })
}

module.exports = { getAllrecord, AddRecord }