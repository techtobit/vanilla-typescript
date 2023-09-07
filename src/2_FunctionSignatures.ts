let greet : (a:string, b:string) => void;
// greet is a fun singnature.if use greet fun anywhare
// delclaretion should be follow this parameters convations

// ex - 1 
greet = (name: string, greeting: string) => {
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