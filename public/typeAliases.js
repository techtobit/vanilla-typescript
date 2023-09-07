"use strict";
// basicly a it created a group of type.
// and assing those type to type sttring (stringOrNum)
// so if have big nested fun then we can use this type string
// instade of deleclear types everyware
// basic 
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
// -- with dynamic type string 
const logDetailsPro = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
// basic obj fun 
const logDetailsObj = (user) => {
    console.log(`${user.item} has a uid of ${user.uid}`);
};
const logDetailsObjPro = (user) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
};
