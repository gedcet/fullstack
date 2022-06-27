/*var Korta = function (in_rūšis, in_simbolis) 
{
    this["rūšis"] = in_rūšis;
    this["simbolis"] = in_simbolis;
}
var korta1 = new Korta("širdys", "Q");
var korta2 = new Korta("vynai", "K");
//console.log(korta1)
//console.log(korta2)
*/
var Automobilis = function (arg_gamintojas, arg_modelis, arg_pagaminimo_metai)
{
    this["gamintojas"] = arg_gamintojas;
    this["modelis"] = arg_modelis;
    this["pagaminimo_metai"] = arg_pagaminimo_metai;
}
var automobiliai = [];
automobiliai.push(new Automobilis("Wv", "golf", 2002));
automobiliai.push(new Automobilis("Audi", "a8", 1997));
automobiliai.push(new Automobilis("Ford", "mondeo", 2001));
automobiliai.push(new Automobilis("Skoda", "octaqvia", 2004));
//console.log(automobiliai[2], automobiliai[1]);