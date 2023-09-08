"use strict";
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Xrive', age: 40 });
// const docThree:Resources<string> = {
//     uid : 1,
//     resourcesName: "Jhon",
//     date: "Duo",
// }
const docThree = {
    uid: 1,
    resourcesName: "Jhon",
    date: { date: 2011 },
};
const docFour = {
    uid: 1,
    resourcesName: "Jhon",
    date: ['Name', 'Age', 'Gender'],
};
