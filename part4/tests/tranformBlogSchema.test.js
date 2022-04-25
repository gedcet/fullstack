const db1 = require('../dataBases/db1')
const blog = require('../models/modelBlog')

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

test('', async () =>
{
    const temp1 = await blog.find()
    console.log("temp1 ats ", temp1)
    
    await db1.closeDB()
    
})