const mongoose = require("mongoose");

const mongoUrl = 'mongodb+srv://gedcet:Epmc740@cluster0.pcqn1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

let connectionID = mongoose.createConnection(mongoUrl)

// async function connectToDB()
// {
//     try
//     {
//         await connectionID.connect()
//         console.log("connected ... ")
//     }
//     catch (err)
//     {
//         console.log("open db error ", err)
//     }
// }

async function closeDB()
{
    try
    {
        await connectionID.close()
        console.log("disconnected ... ")
    }
    catch (err)
    {
        console.log("close to db error ", err)
    }
}

async function dropDB()
{
    try
    {
        await connectionID.dropDatabase()
        console.log("drop data base ...")
    }
    catch (err)
    {
        console.log("drop db error", err)
    }
}

module.exports = { connectionID, closeDB, dropDB }