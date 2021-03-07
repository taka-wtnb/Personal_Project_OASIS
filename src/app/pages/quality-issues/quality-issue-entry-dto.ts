export class QualityIssueEntryDTO {
    orderId: string;
	categoryId: string;
    dateDetected: string;

    constructor(orderId: string, categoryId: string, dateDetected: string) {
        this.orderId = orderId;
        this.categoryId = categoryId;
        this.dateDetected = dateDetected;
    }
}