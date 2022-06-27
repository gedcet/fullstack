import { players_handle_change_direction } from "../modules/players.js";
import { get_pixels } from "../modules/screen.js";

const controller_api_v1 = function (req, res, url_parsed)
{
    const arr1 = Object.keys(url_parsed.query);
    const result1 = arr1.length;

    if (url_parsed.pathname === "/api_v1/info")
    {
        const result1 = { player_name: req.socket.remoteAddress.toString(), score: "200" };
        const result2 = JSON.stringify(result1);
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.write(result2);
        res.end();
        return;
    }
    
    if (result1 === 0)
    {
        const result1 = get_pixels();
        const result2 = JSON.stringify(result1);
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.write(result2);
        res.end();
    }

    else if (url_parsed.query.change_direction !== undefined)
    {
        if (url_parsed.query.change_direction === "left")
        {
            players_handle_change_direction(req.socket.remoteAddress.toString(), "left");
            res.end();
        }
        else if (url_parsed.query.change_direction === "right")
        {
            players_handle_change_direction(req.socket.remoteAddress.toString(), "right");
            res.end();
        }
        else if (url_parsed.query.change_direction === "up")
        {
            players_handle_change_direction(req.socket.remoteAddress.toString(), "up");
            res.end();
        }
        else if (url_parsed.query.change_direction === "down")
        {
            players_handle_change_direction(req.socket.remoteAddress.toString(), "down");
            res.end();
        }
    }
}

export default controller_api_v1;