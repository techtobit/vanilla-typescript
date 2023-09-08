"use strict";
const me = {
    name: 'Xrive',
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log("Hello, ", person.name);
};
greetPerson(me);
console.log(me);
