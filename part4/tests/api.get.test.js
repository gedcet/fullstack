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

describe("get blogs (by http reqest)", () =>
{
    let collection_dump_1
    let http_response

    test("blogs are successfuly dumped from database to collection_dump_1", async () =>
    {
        collection_dump_1 = await model_blog.find()
        collection_dump_1 = collection_dump_1.map(ele => ele.toJSON())//required to prevent buggy behaviour on automatic conversion
    })

    test("HTTP request is successfuly send", async () =>
    {
        http_response = await supertest_1
            .get(`/api/blogs`)
    })

    test("server respose status code is 200", async () =>
    {
        expect(http_response.statusCode).toEqual(200)
    })

    test("server respose body equals collection_dump_1", async () =>
    {
        expect(http_response.body).toEqual(collection_dump_1)
    })
})