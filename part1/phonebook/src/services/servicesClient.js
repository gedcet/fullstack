import axios from "axios";

const ReadAll = async function ()
{
    const result = await axios.get(`${"http://localhost:3001/persons"}`)
    return result;
}

const createPost = async function (obj1)
{
    try
    {
        const result = await axios({
            method: "post",
            url: "http://localhost:3001/persons",
            data: obj1
        })
        return result;
    }
    catch (err)
    {
        console.log(err)
    }
}

const deletePost = async function (id)
{
    try
    {
        const result = await axios({
            method: "delete",
            url: `http://localhost:3001/persons/${id}`
        })
        //alert(`http://localhost:3001/persons/${id}`);        
        return result;
    }
    catch (err)
    {
        console.log(err)
    }
}

const updatePost = async function (id, obj1)
{
    try
    {
        const result = await axios({
            method: "put",
            url: `http://localhost:3001/persons/${id}`,
            data: obj1
            
        })
        //alert(`http://localhost:3001/persons/${id}`);        
        return result;
    }
    catch (err)
    {
        console.log(err)
    }
}

export default { ReadAll, createPost, deletePost, updatePost }