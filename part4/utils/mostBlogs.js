const mostBlogs = (array) =>
{
    const authors = []

    for (let i = 0; i < array.length; i++)
    {
        const searchInAuthorsResult = authors.find(function (ele)
        {
            return (ele.name === array[i].author)
        })

        if (searchInAuthorsResult === undefined)// jei searchInAuthorsResult = undefined nerasta prideda i masyva
        {
            //authors.push(array[i].author) //
            authors.push({
                "name": array[i].author,
                "total_blogs": 1
            })
        }
        else
        {
            searchInAuthorsResult.total_blogs++
        }
        // console.log(authors)
    }

    let authorWithBiggestBlog = authors[0]
    for (let i = 1; i < authors.length; i++)
    {
        if (authors[i].total_blogs > authorWithBiggestBlog)
        {
            authorWithBiggestBlog = authors[i]
            console.log(authorWithBiggestBlog)
        }
    }
    return authorWithBiggestBlog.name
}

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


const temp = mostBlogs(blogs)
console.log(temp)

module.exports = mostBlogs