

const chir = (diametar:number) => 
{
  return diametar * Math.PI;
}

console.log(chir(7.5));


let arrays = ['X', 'Y', 'Z'];
// arrays.push('two')
// arrays.push(5) //error
console.log(arrays);

let mixArray = ['X', 1, true];
mixArray.push('Y', 2, false);
console.log(mixArray);


// unione type with object 
let obj : object;
obj = {
  types : 'New',
  format : 231,
  sell : true,
}

console.log(obj);



let object : {
  name : string;
  age : number;
  student : boolean;
}

object = {
  name : 'Ashraf',
  age : 41,
  student : false,
}

console.log(object);


