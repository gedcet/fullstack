import fs from "fs";
console.log("programos pradzia ");
//sync
fs.writeFileSync("patarle.txt", "tekstas", "utf8");

try
{
    const result = fs.readFileSync("patarle1.txt", "utf8");
    console.log("data ", result);
}
catch (err)
{
    console.log("fs write sync err: ", err)
}

//async callback

fs.readFileSync("patarle1.txt", "utf8", function (err, data) 
{
    if (err)
    {
        console.log("fs reading error ", err);
    }
    else
    {
        console.log("fs read data", data);
    }

});

const promise1 = fs.promises.readFile("patarle.txt", "utf8");
promise1.then(function (value) { console.log("fs promises write data", value); });
promise1.catch(function (value) { console.log("fs promises writefile err", value); });

const prom_readFile = function (in_file_path, in_encoding)
{
    return new Promise(function (resolve, reject)
    {
        fs.readFile(in_file_path, in_encoding, function (err, data)
        {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        });
    });
}

const promise2 = prom_readFile("patarle.txt", "utf8")
promise1.then(function (value)
{ console.log("prom_readFile data", value); });
promise1.catch(function (value)
{ console.log("prom_readFile err", value); });
console.log("programos endas ");
