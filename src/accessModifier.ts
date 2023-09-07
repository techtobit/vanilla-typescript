class myInvoice
{
    // // only can read from anyware but cant write 
    // readonly client: string;

    // // cant read or write outside of class 
    // private details: string;

    // //(defaul) can read and write from anyware.
    // public amount: number;

    // constructor(c: string, d:string, a:number)
    // {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }


    // another way to add access modifier 
    constructor
    (
        readonly client:string,
        private details:string,
        public amount:number
    ){}

    format()
    {
        return `${this.client} owes $${this.amount} for${this.details}`;
    }
}

const invsOne = new myInvoice('mario', 'work on the mario website', 250);
const invsTwo = new myInvoice('Junior', 'work on the mario-Junior website', 300);

// console.log(invOne, invTwo);


// create array base one myInvoice object 
let myInvoices:myInvoice[] = [];
myInvoices.push(invsOne);
myInvoices.push(invsTwo);


myInvoices.forEach(inv => 
    {
        console.log(inv.client,  inv.amount,  inv.format());
        
    })
