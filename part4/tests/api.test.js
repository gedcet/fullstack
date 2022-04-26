const supertest = require('supertest')
const app = require("../app.js")
const { closeDB, dropDB } = require("../dataBases/db1")
const blog = require("../models/modelBlog")

describe("get api/blogs ", function ()
{
    const supertest1 = supertest(app.app)//
    let result

    beforeAll(async function ()
    {
        await dropDB()//istrinam kolekcija
        await blog.create( //sukuria nauja kolekcijas
            {
                "title": "antraste1",
                "author": "henia1",
                "url": "web",
                "likes": 150
            })
        await blog.create(
            {
                "title": "antraste2",
                "author": "henia2",
                "url": "webas",
                "likes": 50
            })
    })

    test("ar grazina 200 koda ", async function ()
    {
        result = await supertest1.get("/api/blogs")
        console.log("masyvas visas  ", result.body)
        expect(result.statusCode === 200).toBeTruthy()
    })

    test("ar grazina masyva ", async function ()
    {
        expect(result.body.constructor === Array).toBeTruthy()
       
        //expect(result.body instanceof Array).toBeTruthy()
        expect(result.body.length !== undefined).toBeTruthy()
        console.log("labas ")
    })

    // test("ar masyvas bus is dvieju elementu ", async function ()
    // {
    //     expect(result.body.length === 2).toBeTruthy()
       
    // })

    // test("ar masyvo reiksmes neiskraipytos ", async function ()
    // {
    //     expect(result.body[0].title === "antraste1").toBeTruthy()
    //     expect(result.body[0].author === "henia1").toBeTruthy()
    //     expect(result.body[0].url === "web").toBeTruthy()
    //     expect(result.body[0].likes === 150).toBeTruthy()

    //     expect(result.body[1].title === "antraste2").toBeTruthy()
    // })

    test("ar grazina netuscia masyva, t.y. nelygu nuliui ", async function ()
    {
        
    })

    afterAll(async function ()
    {
        await closeDB()
        app.lisnerID.close()
    })


})
