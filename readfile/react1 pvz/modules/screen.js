import { player1, player2 } from "./player.js";

const pixels = [];

for (let i = 0; i < 900; i++)
{
    pixels.push("off");
}
const func1 = function ()
{
    const result1 = player1.get_position();
    const result2 = player2.get_position();

    if (result1 === result2)
    {
    player1.set_position(0);
    player2.set_position(899);
    }

    for (let i = 0; i < 900; i++)
    {
        if (i === result1 || i === result2 )
        {
            pixels[i] = "on";
        }
        else if (pixels[i] !== "off")
        {
            pixels[i] = "off";
        }
        
    }

    
    //pixels[result1] = "on";
    return pixels;
}

export { func1 }