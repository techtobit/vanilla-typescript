"use strict";
const chir = (diametar) => {
    return diametar * Math.PI;
};
// console.log(chir(7.5));
let arrays = ['X', 'Y', 'Z'];
// arrays.push('two')
// arrays.push(5) //error
// console.log(arrays);
let mixArray = ['X', 1, true];
mixArray.push('Y', 2, false);
// console.log(mixArray);
// unione type with object 
// error one 
// let arr  : (string | number | boolean)[];
// arr.push('Faruk');
// correct one 
let arr = [];
arr.push('Faruk', 20, true);
// console.log(arr);
let obj;
obj = {
    types: 'New',
    format: 231,
    sell: true,
};
// console.log(obj);
let object;
object = {
    name: 'Ashraf',
    age: 41,
    student: false,
};
// console.log(object);
