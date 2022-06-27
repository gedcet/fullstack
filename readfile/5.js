import fs from "fs";

const funct1 = async function()
{
    const result1 = await fs.promises.writeFile("patarle2.txt", "patarleiu tekas","utf8");
    const result2 = await fs.promises.readFile("patarle2.txt", "utf8");
}
console.log("programos pradzia ");

funct1();

console.log("programos pabaiga ");