let greetS : (a:string, b:string) => void;
// greet is a fun singnature.if use greet fun anywhare
// delclaretion should be follow this parameters convations

// ex - 1 
greetS = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// ex : 2
let calc : (a:number, b:number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action == 'add')
    {
        return numOne+numTwo;
    }
    else
     // if i not use else it's will throw a void error
    // on fun signatur it returning => Number(line - 11 ).
    {
        return numOne - numTwo;
    }
}


// ex - 3 
let logDetailsPros: (obj:{name:string, age:number}) => void;
type person = {name: string, age:number};

// logDetails=(logDoc:{name: string, age:number})=>
// {
//     console.log(`${logDoc.name} is ${logDoc.age}`);
    
// }


// fun with singnature and type alise
logDetailsPros=(logDoc:person)=>
{
    console.log(`${logDoc.name} is ${logDoc.age}`);
    
}