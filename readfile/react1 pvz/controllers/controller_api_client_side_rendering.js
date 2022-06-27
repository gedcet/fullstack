import { player1, player2 } from "../modules/player.js"; //cia atvaizdavo viena skaiciu
import { func1 } from "../modules/screen.js";

export const controller_api_client_side_rendering = function (req, res, url_parsed)
{
    console.log("  controller_api_client_side_rendering   ")

    if (url_parsed.pathname === "/api_client_side_rendering/get_position")
    {
        //const result1 = player1.get_position();
        //const result2 = result1.toString();
        const result1 = func1();
        const result2 = JSON.stringify(result1);
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.write(result2);
    }
    else if (url_parsed.pathname === "/api_client_side_rendering/right") 
    {
        if (url_parsed.query.player_name === "player1")
        {
            player1.go_right();
        }
        else if (url_parsed.query.player_name === "player2")
        {
            player2.go_right();
        }

    }
    else if (url_parsed.pathname === "/api_client_side_rendering/left")
    {
        if (url_parsed.query.player_name === "player1")
        {
            player1.go_left();
        }
        else if (url_parsed.query.player_name === "player2")
        {
            player2.go_left();
        }

    }
    else if (url_parsed.pathname === "/api_client_side_rendering/up") 
    {
        if (url_parsed.query.player_name === "player1")
        {
            player1.go_up();
        }
        else if (url_parsed.query.player_name === "player2")
        {
            player2.go_up();
        }

    }
    else if (url_parsed.pathname === "/api_client_side_rendering/down") 
    {
        if (url_parsed.query.player_name === "player1")
        {
            player1.go_down();
        }
        else if (url_parsed.query.player_name === "player2")
        {
            player2.go_down();
        }

    }
    res.end();
}