import { HasFormatter } from "../interfaces/interfaceHasFormator.js";

export class PaymentClasses implements HasFormatter
{ 
    constructor
    (
        readonly recipients:string,
        private details:string,
        public amount:number
    ){}

    format()
    {
        return `${this.recipients} owes $${this.amount} for${this.details}`;
    }
}