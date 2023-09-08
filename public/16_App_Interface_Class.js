import { InvoiceInterface } from "./classes/InvoiceInterface.js";
import { PaymentClasses } from "./classes/PaymentClasses.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new InvoiceInterface(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new PaymentClasses(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // );
});
