import { ListTemplate } from "./classes/17_ListTemplate.js";
import { InvoiceInterface } from "./classes/InvoiceInterface.js";
import { PaymentClasses } from "./classes/PaymentClasses.js";
import { HasFormatter } from "./interfaces/interfaceHasFormator.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// ListTemplate vid:17 - 
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

// Tupls vid:20 -
let values : [string, string, number];
values = [tofrom.value,details.value, amount.valueAsNumber];

form.addEventListener('submit', (e: Event) => 
{
    e.preventDefault();
    let doc : HasFormatter;

    if(type.value === 'invoice')
    {
        doc = new InvoiceInterface(...values);
    }
    else
    {
        doc = new PaymentClasses(...values);
    }

    // console.log(doc);
    
    list.render(doc, type.value, 'start')
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // );
    
})

