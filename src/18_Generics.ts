// Generics
const addUID = < T extends {name: string}>(obj : T) =>
{
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid};
}

let docOne = addUID({name: 'Xrive', age: 40});

interface Resources<T> {
    uid : number;
    resourcesName: string;
    date: T;
}

// const docThree:Resources<string> = {
//     uid : 1,
//     resourcesName: "Jhon",
//     date: "Duo",
// }

const docThree:Resources<object> = {
    uid : 1,
    resourcesName: "Jhon",
    date: {date: 2011},
}


const docFour:Resources<string[]> = {
    uid : 1,
    resourcesName: "Jhon",
    date: ['Name', 'Age', 'Gender'],
}