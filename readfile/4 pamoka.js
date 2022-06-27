var objektas1 = { 
    "savybė1": 1, 
    "savybė2": 2, 
    "metodas1": function () 
    { 
    console.log(objektas1["savybė1"]); 
    console.log(this["savybė2"]) 
    } 
   } 
   var objektas2 = { 
    "savybė3": 3
   } 
   Object.setPrototypeOf(objektas2, objektas1); 
   //objektas2.metodas1(); 
   
   var objektas3 = {
       "savybė4": 4,
   }
   Object.setPrototypeOf(objektas3, objektas1); 
   objektas3.metodas1();