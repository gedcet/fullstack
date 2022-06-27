var objektas1 = {
    "savybė1": 1,
    "savybė2": 2,
    "metodas1": function () 
    {
        console.log(objektas1["savybė1"]);
        console.log(this["savybė2"])
    }
}
var objektas2 = { "savybė3": 3 }
var objektas3 = { "savybė4": 4 }
objektas2.__proto__ = objektas1;
//console.log(objektas2.__proto__)
objektas3.__proto__ = objektas2;
//console.log(objektas3.__proto__)
//objektas3.metodas1();
var objektas4 = { "savybė5": 5 }
objektas4.__proto__ = objektas3;
console.log(objektas4.savybė1,objektas4.savybė2, objektas4.savybė3, objektas4.savybė4, objektas4.savybė5)