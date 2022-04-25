const db1 = require('../dataBases/db1.js')
const blog = require('../models/modelBlog.js')
const total_likes = require('../utils/totalLikes.js')
const best_bloger = require('../utils/highestBlog.js')


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
    let result1 = await blog.find()
    console.log(result1)

})

// test('return viena', () =>
// {
//     const blogs = []
//     const result = a(blogs)
//     expect(result).toBe(1)
// })

// test('laiku nuskaitymas ', async () =>
// {
//     const resulst2 = await total_likes()
//     expect(resulst2).toBe(70)
//     await db1.closeDB()
// })

test('geriausias blogeris ', async () =>
{
    const resulst2 = await best_bloger()
    const result3 = await blogerioAntraste()
    console.log("Geriausia antraste ", result3)
    expect(resulst2).toBe("henia2")
    await db1.closeDB()
})

// test('testo uzbaigimas', async () =>
// {
//     app.lisnerID.close()
//     await mongoose.disconnect()
// })
