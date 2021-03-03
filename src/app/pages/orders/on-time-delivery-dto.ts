export class OnTimeDeliveryDTO {
    orderId: string;
	deliveryDate: string;
	isDelayed: boolean;

    constructor(orderId: string, deliveryDate: string, isDelayed: boolean) {
        this.orderId = orderId;
        this.deliveryDate = deliveryDate;
        this.isDelayed = isDelayed;
    }
}