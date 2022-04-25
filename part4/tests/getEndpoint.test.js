const supertest = require('supertest')
const app = require('../app')
const db1 = require('../dataBases/db1')
const blog = require('../models/modelBlog')

const supertest1 = supertest(app.app)

test('valom ir nauja kolekcija sukuriam ', async () => 
{
    await db1.dropDB()
    await blog.create(
        {
            "title": "antraste1",
            "author": "henia1",
            "url": "web",
            "likes": 15
        })
    await blog.create(
        {
            "title": "antraste2",
            "author": "henia2",
            "url": "web",
            "likes": 50
        })
    await blog.create(
        {
            "title": "antraste3",
            "author": "henia3",
            "url": "web",
            "likes": 5
        })
    await blog.create(
        {
            "title": "antraste4",
            "author": "henia1",
            "url": "webas",
            "likes": 10
        })
})

test('paskaiciuojam kiek elementu yra db`se', async () =>
{
    const temp1 = await supertest1.get('/api/blogs')
    //console.log("temp1 ilgis ", temp1.body.length)
    app.lisnerID.close()
    await db1.closeDB()
    expect(temp1.body.length).toEqual(4)

    // supertest1.get('/api/notes').then(function (result, err)
    // {
    //     console.log("supertest ats. ", result.body)
    //     app.lisnerID.close()
    //     mongoose.closeDB()
    // })
})