const Blog = require("../models/modelBlog");

const dummy = (blogs) =>
{
  return 1;
}

const totalLikes = () =>
{
  try
  {
    result1 = Blog()
    console.log(result1)
  }
  catch (err)
  {
    console.log("totalu skaiciavimo klaida " + err)
  }
}

//module.exports = { "dummy": dummy, "totalLikes": totalLikes }
module.exports = { dummy, totalLikes }
