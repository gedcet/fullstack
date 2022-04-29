const express = require('express')
const {modelBlog} = require('../models/modelBlog')

const router_blogs = express.Router()

router_blogs.get('/', async (request, response) =>
{
    try
    {
        const result = await modelBlog.find({})
        response.status(200).json(result)
    }
    catch (err)
    {
        response.status(503).end()
    }
})

router_blogs.post('/', async (request, response) =>
{
    try
    {
        const result = await modelBlog.create(request.body)
        response.status(201).json(result)
    }
    catch (err)
    {
        response.status(503).end()
    }
})

router_blogs.delete('/:id', async (request, response) =>
{
    try
    {
        const result = await modelBlog.findByIdAndDelete(request.params.id)

        if (result === null)
        {
            response.status(404).end()
        }
        else
        {
            response.status(200).end()
        }
    }
    catch (err)
    {
        response.status(503).end()
    }
})

router_blogs.put('/:id', async (request, response) =>
{
    try
    {
        const result = await modelBlog.findByIdAndUpdate(request.params.id, request.body)

        if (result === null)
        {
            response.status(404).end()
        }
        else
        {
            response.status(200).end()
        }
    }
    catch (err)
    {
        response.status(503).end()
    }
})

module.exports = router_blogs