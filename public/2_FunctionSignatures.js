"use strict";
let greetS;
// greet is a fun singnature.if use greet fun anywhare
// delclaretion should be follow this parameters convations
// ex - 1 
greetS = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// ex : 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action == 'add') {
        return numOne + numTwo;
    }
    else 
    // if i not use else it's will throw a void error
    // on fun signatur it returning => Number(line - 11 ).
    {
        return numOne - numTwo;
    }
};
// ex - 3 
let logDetailsPros;
// logDetails=(logDoc:{name: string, age:number})=>
// {
//     console.log(`${logDoc.name} is ${logDoc.age}`);
// }
// fun with singnature and type alise
logDetailsPros = (logDoc) => {
    console.log(`${logDoc.name} is ${logDoc.age}`);
};
