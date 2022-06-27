import { check_for_colision } from "./physics.js";
import { Player, arr } from "./players.js";
import { set_pixel } from "./screen.js";


export const refresh = function ()
{
    check_for_colision(arr);

    for (let i = 0; i < arr.length; i++)
    {
        const player = arr[i];

        set_pixel(player.position, "off");
        player.move();
        set_pixel(player.position, i.toString());
    }

    setTimeout(refresh, 200);
}


