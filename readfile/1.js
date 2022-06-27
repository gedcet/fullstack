import fs from "fs";
console.log("programos pradzia");

const timestamp1 = Date.now();

let max = (2 ** 20);
let tekstas = "";
while (max > 0)
{
    tekstas = tekstas + "a";
    max -= 1;
}

const generavimo_laikas = Date.now() - timestamp1;
console.log('baige generavima ', generavimo_laikas);

const timestamp2 = Date.now();

fs.writeFile(
    "patarle.txt",
    tekstas,
    "utf8",
    function () 
    {
        console.log("fs writeris baige", Date.now() - timestamp1, " milisekundziu");
        console.log("fs writeris baige perduodau uzduoti");
        fs.readFile("patarle.txt", "utf8", function (err, data)
        {
            console.log("fs.readFile baige");
            console.log(data[1024000]);
        });

    });

//fs.writeFileSync("patarle.txt", tekstas, "utf8", function () { console.log("fs writeris sync", Date.now()-timestamp1, " milisekundziu")});
//console.log("fs writeris sync", Date.now()-timestamp1, " milisekundziu");

const patarle = fs.readFileSync("patarle.txt", "utf8");

//console.log("programos pabaiga");
//console.log('baige irasineti ', generavimo_laikas-timestamp2);

console.log('baige irasineti ', Date.now() - timestamp2, "milisek");