const supertest = require('supertest')
const mongooseDB = require('mongoose')
const app = require("../app.js")
const { closeDB, dropDB } = require("../dataBases/db1")
const blog = require("../models/modelBlog")

describe("post api/create ", function ()
{
    let result
    let dbID
    const supertest1 = supertest(app.app)//
    const masyvas1 =
        [{
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
        },
        {
            "title": "antraste3",
            "author": "henia3",
            "url": "webasas3",
            "likes": 505
        }]

    beforeAll(async function ()
    {
        await dropDB()//istrinam kolekcija
        await blog.create(masyvas1[0])
        await blog.create(masyvas1[1])
    })

    test("patikrinam ar grazina 201 ", async function ()
    {
        result = await supertest1.post("/api/create").send(masyvas1[2])
        //console.log("masyvas visas  ", result.body)
        expect(result.statusCode === 201).toBeTruthy()
    })

    test("ar egzistuoja ID", async function ()
    {
        dbID = result.body._id
        expect(result.body._id !== undefined).toBeTruthy()
    })

    test("patikrinam ar pridejo irasa su id i db ", async function ()
    {
        const result0 = await blog.findOne({ "_id": dbID })
        expect(result0._id).toEqual(dbID)
        console.log("is db  ", dbID, result0._id)
    })

    afterAll(async function ()
    {
        await closeDB()
        app.lisnerID.close()
    })
})