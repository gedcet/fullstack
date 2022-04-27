const supertest = require('supertest')
const app = require("../app.js")
const database_1 = require("../dataBases/db1")
const model_blog = require("../models/modelBlog")

const initial_blogs = [
    {
        "title": "title_1",
        "author": "author_1",
        "url": "url_1",
        "likes": 1
    },
    {
        "title": "title_2",
        "author": "author_2",
        "url": "url_2",
        "likes": 2
    },
    {
        "title": "title_3",
        "author": "author_3",
        "url": "url_3",
        "likes": 3
    }
]

const supertest_1 = supertest(app.app)

beforeAll(async () =>
{
    // await database_1.drop_db()//alternative 1 delete db

    await model_blog.deleteMany()//alternative 2 delete all records in colection

    await model_blog.create(initial_blogs[0])
    await model_blog.create(initial_blogs[1])
    await model_blog.create(initial_blogs[2])
})

afterAll(async () =>
{
    await database_1.closeDB()
    app.lisnerID.close()
})

describe("add blog (by http reqest)", () =>
{
    let collection_dump_1
    let http_response
    let collection_dump_2

    test("blogs are successfuly dumped from database to collection_dump_1", async () =>
    {
        collection_dump_1 = await model_blog.find()
        collection_dump_1 = collection_dump_1.map(ele => ele.toJSON())//required to prevent buggy behaviour on automatic conversion
    })

    test("HTTP request is successfuly send", async () =>
    {
        http_response = await supertest_1
            .post(`/api/blogs`)
            .send({
                "title": "title_4",
                "author": "author_4",
                "url": "url_4",
                "likes": 4
            })
    })

    test("server respose status code is 201", async () =>
    {
        expect(http_response.statusCode).toEqual(201)
    })

    test("server respose body is object and has key named id", async () =>
    {
        expect(http_response.body instanceof Object).toBe(true)
        expect(http_response.body.id !== undefined).toBe(true)
    })

    test("blogs are successfuly dumped from database to collection_dump_2", async () =>
    {
        collection_dump_2 = await model_blog.find()
        collection_dump_2 = collection_dump_2.map(ele => ele.toJSON())//required to prevent buggy behaviour on automatic conversion
    })

    test("modified_collection_dump_1 equals collection_dump_2", async () =>
    {
        const modified_collection_dump_1 = [...collection_dump_1]
        modified_collection_dump_1.push({
            "title": "title_4",
            "author": "author_4",
            "url": "url_4",
            "likes": 4,
            "id": http_response.body.id
        })

        expect(modified_collection_dump_1).toEqual(collection_dump_2)
    })
})