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

    test("request succsefully send ", async () =>
    {
        requestResult = await supertest1.get("/api/blogs")
    })

    test("request status code 200", () =>
    {
        expect(requestResult.statusCode).toBe(200)
    })

    test("patikrinam ar ikelti ir db irasai vienodi, collection sucsesfully dumped ", async () =>
    {
        collectionDump1 = await modelBlog.find()

        for (let i = 0; i < collectionDump1.length; i++)
        {
            collectionDump1[i]=collectionDump1[i].toJSON()
            collectionDump1[i]._id=collectionDump1[i]._id.toString()
        }

        expect(collectionDump1).toEqual(requestResult.body)
    })

})


