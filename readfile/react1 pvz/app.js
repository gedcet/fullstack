import http from "http";
import url from "url";
import { controller_public } from "./controllers/controller_public.js";
import { controller_api_client_side_rendering } from "./controllers/controller_api_client_side_rendering.js";

/*
reacto atsiuntimas
https://unpkg.com/react@17/umd/react.development.js
https://unpkg.com/react-dom@17/umd/react-dom.development.js
http://127.0.0.1/public/index_react.html
*/

http
  .createServer(function (req, res)
  {
    console.log(req.method, req.url);
    const url_parsed = url.parse(req.url, true);

    if ((req.method === "GET") && (url_parsed.pathname.startsWith("/public/")))
    {
      controller_public(req, res, url_parsed);
    }
    else if ((req.method === "GET") && (url_parsed.pathname.startsWith("/api_client_side_rendering/")))
    {
      controller_api_client_side_rendering(req, res, url_parsed);
    }
    else 
    {
      res.end();
    }
  })
  .listen(80, "172.16.42.148");
