import { ListTemplate } from "./classes/17_ListTemplate.js";
import { InvoiceInterface } from "./classes/InvoiceInterface.js";
import { PaymentClasses } from "./classes/PaymentClasses.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// ListTemplate vid:17 - 
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// Tupuls vid:20 -
let values;
values = [tofrom.value, details.value, amount.valueAsNumber];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new InvoiceInterface(...values);
    }
    else {
        doc = new PaymentClasses(...values);
    }
    // console.log(doc);
    list.render(doc, type.value, 'start');
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // );
});
