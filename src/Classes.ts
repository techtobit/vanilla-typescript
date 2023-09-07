class Invoice
{
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d:string, a:number)
    {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format()
    {
        return `${this.client} owes $${this.amount} for${this.details}`;
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('Junior', 'work on the mario-Junior website', 300);

// console.log(invOne, invTwo);


// create array base one invoice object 
let invoice:Invoice[] = [];
invoice.push(invOne);
invoice.push(invTwo);
console.log(invoice);

