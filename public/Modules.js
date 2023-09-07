import { invoiceModifer } from './classes/InoicesMoule.js';
const invsOne = new invoiceModifer('mario', 'work on the mario website', 250);
const invsTwo = new invoiceModifer('Junior', 'work on the mario-Junior website', 300);
// console.log(invOne, invTwo);
// create array base one invoiceModifer object 
let invoiceModifers = [];
invoiceModifers.push(invsOne);
invoiceModifers.push(invsTwo);
invoiceModifers.forEach(inv => {
    console.log("Module.ts - ", inv.client, inv.amount, inv.format());
});
