const Blog = require("../models/modelBlog.js");

const highestBlog = async () =>
{
    try
    {
        const result2 = await Blog.find()
        let geriausioBlogerioLaikai = 0
        let geriausiasBlogelis = ""
        let blogerioAntraste = ""

        for (let i = 0; i < result2.length; i++)
        {
            if (result2[i].likes > geriausioBlogerioLaikai)
            {
                geriausiasBlogelis = result2[i].author
                geriausioBlogerioLaikai = result2[i].likes
                blogerioAntraste = result2[i].title
                //console.log("autorius ", geriausiasBlogelis)
            }
        }
        return geriausiasBlogelis
        
    }
    catch (err)
    {
        console.log("totali like's skaiciavimo klaida " + err)
    }
}
module.exports = highestBlog