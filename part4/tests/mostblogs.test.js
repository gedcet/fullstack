const total_blogs = require('../utils/mostBlogs.js')

test('skaiciuojam autorius ', () => 
{
    const blogs = [
        {
            "title": "antraste1",
            "author": "henia1",
            "url": "web",
            "likes": 15
        },

        {
            "title": "antraste2",
            "author": "henia2",
            "url": "web",
            "likes": 50
        },

        {
            "title": "antraste3",
            "author": "henia3",
            "url": "web",
            "likes": 5
        },

        {
            "title": "antraste4",
            "author": "henia1",
            "url": "webas",
            "likes": 10
        }
    ]

    const result1 = total_blogs(blogs)

    expect(result1).toBe("henia1")
})

