export class PriceIncreaseEntryDTO {
    orderId: string;
	increaseReasonId: string;

    constructor(orderId: string, increaseReasonId: string) {
        this.orderId = orderId;
        this.increaseReasonId = increaseReasonId;
    }
}