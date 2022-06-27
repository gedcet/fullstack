import crypto from "crypto";
import fs from "fs";

const timestamp1 = Date.now();

for (let i = 0; i < 10; i += 1)
{
    const prime1 = crypto.generatePrime(4096, { bigint: true }, function (err, prime)
    {
        fs.writeFile("prime" + i + ".txt", prime.toString(), "utf8", function (err)
        {
            fs.readFile("prime"+ i +".txt", "utf8", function (err, data)
            {
                           //console.log(data, "kintamasis i ", i);
                           console.log( "kintamasis i ", i);
            });
        });
    });
}
console.log(Date.now() - timestamp1);

console.log("programos pabaiga");