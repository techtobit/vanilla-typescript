"use strict";
let greet;
// greet is a fun singnature.if use greet fun anywhare
// delclaretion should be follow this parameters convations
// ex - 1 
greet = (name, greeting) => {
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
