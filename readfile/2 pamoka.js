/*var objektas1 = {
    "savybė1": 1,
    "savybė2": 2,
    "metodas1": function () 
    {
        console.log(objektas1["savybė1"]);
        console.log(this["savybė2"])
    }
}
objektas1["metodas1"]();
*/
var korta = {
    rusis: "vynai",
    simbolis: "A",
    pasisveikinti: function ()
    {
        console.log(this.rusis)
        console.log(this.simbolis)
    }
}
korta.pasisveikinti()