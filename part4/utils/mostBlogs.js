const Blog = require("../models/modelBlog.js");

const mostBlogs = async () =>
{
    try
    {
        const result1 = await Blog.find()
        let autorius_with_most_blogs = []
        let autoriaus_blogsai = 0

        for (let i = 0; i < result1.length; i++)
        {
            autorius_with_most_blogs = result1[i].author
            autoriaus_blogsai = result1[i].likes
        }

        let geriausioBlogerioLIKEs = 0

        for (let i = 0; i < autorius_with_most_blogs.length; i++)
            if (autoriaus_blogsai[i].likes > geriausioBlogerioLIKEs)
            {
                geriausiasBlogelis = autorius_with_most_blogs[i]
                geriausioBlogerioLIKEs = autoriaus_blogsai[i]
                
                //console.log("autorius ", geriausiasBlogelis)
            }
        return geriausiasBlogelis
        return geriausioBlogerioLIKEs

    }
    catch (err)
    {
        console.log("totali autoriaus blogsu skaiciavimo klaida " + err)
    }
}
module.exports = mostBlogs