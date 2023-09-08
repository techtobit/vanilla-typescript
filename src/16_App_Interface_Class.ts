import { InvoiceInterface } from "./classes/InvoiceInterface.js";
import { PaymentClasses } from "./classes/PaymentClasses.js";
import { HasFormatter } from "./interfaces/interfaceHasFormator.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => 
{
    e.preventDefault();
    let doc : HasFormatter;

    if(type.value === 'invoice')
    {
        doc = new InvoiceInterface(tofrom.value,details.value, amount.valueAsNumber);
    }
    else
    {
        doc = new PaymentClasses(tofrom.value,details.value, amount.valueAsNumber);
    }

    console.log(doc);
    

    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // );
    
})

