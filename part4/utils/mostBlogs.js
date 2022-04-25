const mostBlogs = (array) =>
{
    const authors = []

    for (let i = 0; i < array.length; i++)
    {
        const searchInAuthorsResult = authors.find(function (ele)
        {
            return (ele.author === array[i].author)
        })

        if (searchInAuthorsResult === undefined)// jei searchInAuthorsResult = undefined nerasta prideda i masyva
        {
            //authors.push(array[i].author) //
            authors.push({
                "author": array[i].author,
                "blogs": 1
            })
        }
        else
        {
            searchInAuthorsResult.blogs++
        }
        // console.log(authors)
    }

    let authorWithBiggestBlog = authors[0]
    for (let i = 1; i < authors.length; i++)
    {
        if (authors[i].blogs > authorWithBiggestBlog.blogs)
        {
            authorWithBiggestBlog = authors[i]
            console.log(authorWithBiggestBlog)
        }
    }
    return authorWithBiggestBlog
}

module.exports = mostBlogs