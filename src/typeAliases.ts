type stringOrNum = string | number;
// basicly a it created a group of type.
// and assing those type to type sttring (stringOrNum)
// so if have big nested fun then we can use this type string
// instade of deleclear types everyware




// basic 
const  logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

// -- with dynamic type string 
const  logDetailsPro = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}
// basic obj fun 
const  logDetailsObj = (user:{uid: string | number, item: string}) => {
    console.log(`${user.item} has a uid of ${user.uid}`);
}

// -- with dynamic type string \
type objectWithName = {name:string, uid: stringOrNum};

const  logDetailsObjPro = (user:objectWithName) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
}