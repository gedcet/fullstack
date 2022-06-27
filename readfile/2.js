console.log("pradzia");


setTimeout(function () 
{
    console.log("labas 1 ");

    setTimeout(function ()
    {
        console.log("labas 2 ");
    }, 2000);

}, 3000);


console.log("pabaiga");