const Blog = require("../models/modelBlog.js");

const totalLikes = async () =>
{
    try
    {
        const result2 = await Blog.find()
        
        let totalLikesSum = 0
        for (let i = 0; i < result2.length; i++)
        {
            //if (result2[i].likes !== undefined)
            //{
                //console.log("pradzia ", result2[i])
                totalLikesSum = totalLikesSum + result2[i].likes
            //}
            
        }
        return totalLikesSum
    }
    catch (err)
    {
        console.log("totali skaiciavimo klaida " + err)
    }
}

module.exports = totalLikes