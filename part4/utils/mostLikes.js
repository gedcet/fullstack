const mostLikes = (array) =>
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
                "author": array[i].author,
                "likes": array[i].likes
            })
        }
        else
        {
            searchInAuthorsResult.likes=searchInAuthorsResult.likes + array[i].likes
            //searchInAuthorsResult.likes+=array[i].likes cia arba virsuje arba sioje eiluteje galima taip rasyti
        }
        // console.log(authors)
    }

    let authorWithmostLikes = authors[0]
    for (let i = 1; i < authors.length; i++)
    {
        if (authors[i].likes > authorWithmostLikes.likes)
        {
            authorWithmostLikes = authors[i]
            console.log(authorWithmostLikes)
        }
    }
    return authorWithmostLikes
}

module.exports = mostLikes