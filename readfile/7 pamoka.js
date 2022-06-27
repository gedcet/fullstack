//
var Korta = function (in_rūšis, in_simbolis) 
{
    this["rūšis"] = in_rūšis;
    this["simbolis"] = in_simbolis;
}
Korta.prototype.išvesti_į_konsole = function () 
{
    console.log("Korta:", this.rūšis, this.simbolis);
}
var korta1 = new Korta("širdys", "Q");
var korta2 = new Korta("cirvai", "K");
var korta3 = new Korta("bugnai", "A");
var korta4 = new Korta("kryziai", "10");
korta4.išvesti_į_konsole();

Korta.prototype.grazinti_spalva = function ()
{
         if (this.rūšis == "širdys"){return "raudona";}
    else if (this.rūšis == "vynai"){return "juoda";}
    else if (this.rūšis == "bugnai"){return "raudona";}
    else if (this.rūšis == "kryziai"){return "juoda";}
}
var a = korta2.grazinti_spalva();
