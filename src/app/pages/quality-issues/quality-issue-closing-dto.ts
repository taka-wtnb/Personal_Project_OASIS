export class QualityIssueClosingDTO {
    orderId: string;
    dateClosed: string;

    constructor(orderId: string, dateClosed: string) {
        this.orderId = orderId;
        this.dateClosed = dateClosed;
    }
}