import http from "http";
import url from "url";
import controller_api_v1 from "./controllers/controllers_api_v1.js";
import { controller_public } from "./controllers/controller_public.js";

/*
https://unpkg.com/react@17/umd/react.development.js
https://unpkg.com/react-dom@17/umd/react-dom.development.js
http://127.0.0.1/public/react.html
*/

http.createServer(function (req, res)
{
    console.log(req.socket.remoteAddress, req.method, req.url);
    const url_parsed = url.parse(req.url, true);

    if ((req.method === "GET") && (url_parsed.pathname.startsWith("/public/")))
    {
        controller_public(req, res, url_parsed);
    }
    else if ((req.method === "GET") && (url_parsed.pathname.startsWith("/api_v1/")))
    {
        controller_api_v1(req, res, url_parsed);
    }
    else
    {
        res.end();
    }

    //}).listen(80, "172.16.42.148");
}).listen(80, "127.0.0.1");