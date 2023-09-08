export class PaymentClasses {
    constructor(recipients, details, amount) {
        this.recipients = recipients;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipients} owes $${this.amount} for${this.details}`;
    }
}
