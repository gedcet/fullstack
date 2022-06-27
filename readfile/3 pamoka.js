var korta = { rūšis: "bugnai"}
korta["simbolis"] = "J";
korta["isvesti_i_konsole"] = function()
{
    console.log(this.rūšis);
    console.log(this.simbolis);
}
//console.log(korta.isvesti_i_konsole)
korta.isvesti_i_konsole()