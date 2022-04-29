const supertest = require('supertest')
const express1 = require('../app')
const { modelBlog, mongooseConnection } = require('../models/modelBlog')
const express1Listiner = require('../index')

const supertest1 = supertest(express1)

const initialBlogs =
    [
        {
            "title": "title1",
            "author": "autorius1",
            "url": "keiciam http://google.lt/1",
            "likes": 1
        },
        {
            "title": "title2",
            "author": "autorius2",
            "url": "keiciam http://google.lt/2",
            "likes": 2
        },
        {
            "title": "title3",
            "author": "autorius3",
            "url": "keiciam http://google.lt/3",
            "likes": 3
        }
    ]

const additionBlog =
{
    "title": "antraste4",
    "author": "autorius4",
    "url": "keiciam http://google.lt/4",
    "likes": 4
}

beforeAll(async () =>
{
    await modelBlog.deleteMany()

    for (i = 0; i < initialBlogs.length; i++)
    {
        await modelBlog.create(initialBlogs[i])
    }
})

afterAll(async () =>
{
    await mongooseConnection.close()
    express1Listiner.close()
})

describe("get all blogs ", () =>
{
    let requestResult
    let collectionDump1
    let collectionDump2

    test("dump1 succsefully readed ", async () =>
    {
        collectionDump1 = await modelBlog.find()

        for (let i = 0; i < collectionDump1.length; i++)
        {
            collectionDump1[i] = collectionDump1[i].toJSON()
            collectionDump1[i]._id = collectionDump1[i]._id.toString()
        }
    })

    test("request succsefully post ", async () =>
    {
        requestResult = await supertest1.post("/api/blogs").send(additionBlog)
    })

    test("request status code 201", () =>
    {
        expect(requestResult.statusCode).toBe(201)
    })

    test("dump2 succsefully readed  ", async () =>
    {
        collectionDump2 = await modelBlog.find()

        for (let i = 0; i < collectionDump2.length; i++)
        {
            collectionDump2[i] = collectionDump2[i].toJSON()
            collectionDump2[i]._id = collectionDump2[i]._id.toString()
        }
    })

    test("dump1 equals dump2 ", () =>
    {
        additionBlog._id = requestResult.body._id
        additionBlog.__v = requestResult.body.__v
        collectionDump1.push(additionBlog)
        expect(collectionDump1).toEqual(collectionDump2)
    })
})


