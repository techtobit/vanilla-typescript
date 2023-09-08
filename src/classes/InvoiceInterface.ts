import { HasFormatter } from "../interfaces/interfaceHasFormator.js";

export class InvoiceInterface implements HasFormatter
{ 
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