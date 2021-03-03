export class DelayEntryDTO {
    orderId: string;
	delayReasonId: string;

    constructor(orderId: string, delayReasonId: string) {
        this.orderId = orderId;
        this.delayReasonId = delayReasonId;
    }
}