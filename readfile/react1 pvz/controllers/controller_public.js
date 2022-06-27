import fs from "fs";
export const controller_public = function (req, res, url_parsed)
{
  console.log("--<controller_public>--");
  try
  {
    const result1 = fs.readFileSync(`.${url_parsed.pathname}`, {
      encoding: "utf-8",
    });
    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    if (/.html$/.test(url_parsed.pathname) === true)
    {
      res.setHeader("Content-Type", "text/html; charset=utf-8")
    }

    res.write(result1);
  } catch (err)
  {
    console.log("Klaida", err);
    res.write("Klaida toks failas nerastas, bandykite dar karta ")
  }

  res.end();
};
