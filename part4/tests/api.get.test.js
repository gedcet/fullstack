const supertest = require('supertest')
const app = require("../app.js")
const { closeDB, dropDB } = require("../dataBases/db1")
const blog = require("../models/modelBlog")

describe("get api/blogs ", function ()
{
    const supertest1 = supertest(app.app)//
    let result

    const masyvas1 = [{
        "title": "antraste1",
        "author": "henia1",
        "url": "web",
        "likes": 150
    },
    {
        "title": "antraste2",
        "author": "henia2",
        "url": "webas",
        "likes": 50
    }
    ]

    beforeAll(async function ()
    {
        await dropDB()//istrinam kolekcija
        await blog.create(masyvas1[0])
        await blog.create(masyvas1[1])
    })

    test("ar grazina 200 koda ", async function ()
    {
        result = await supertest1.get("/api/blogs")
        //console.log("masyvas visas  ", result.body)
        expect(result.statusCode === 200).toBeTruthy()
    })

    test("ar grazina masyva ", async function ()
    {
        expect(result.body.constructor === Array).toBeTruthy()
        //expect(result.body.length === 2).toBeTruthy()
        //expect(result.body instanceof Array).toBeTruthy()
    })

    test("ar masyvas bus is dvieju elementu ", async function ()
    {
        expect(result.body.length === 2).toBeTruthy()
    })

    test("ar masyvo reiksmes neiskraipytos ", async function ()
    {
        expect(result.body[0].title === masyvas1[0].title).toBeTruthy()
        expect(result.body[0].author === masyvas1[0].author).toBeTruthy()
        expect(result.body[0].url === masyvas1[0].url).toBeTruthy()
        expect(result.body[0].likes === masyvas1[0].likes).toBeTruthy()

        expect(result.body[1].title === masyvas1[1].title).toBeTruthy()
    })

    afterAll(async function ()
    {
        await closeDB()
        app.lisnerID.close()
    })


})

