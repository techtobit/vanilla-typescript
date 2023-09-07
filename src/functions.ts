let fun1 : Function; // adding type where F is capital;

fun1 =() => {
    console.log('any');
}


// -- basic fun 
// const add = (a:number, b:number) => {
//     console.log(a+b);
// }
// add(5, 10);

// -- optional parameter in fun
// const add = (a:number, b:number, c?: number | string) => {
//     console.log(a+b);
//     // if i not pass value to fun it will not give any errror;
// }
// add(5, 10);

// -- default parameters value
const add = (a:number, b:number, c: number | string = 25) : void=> {
    console.log(a+b);
    console.log(c);
    //void means noting will return form fun
}
add(5, 10);