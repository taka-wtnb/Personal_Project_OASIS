export class OrderEntryDTO {
    itemId: string;
    supplierId: string;
    qty: string;
    unitPrice: string;
    orderDate: string;
    promiseDate: string;

    constructor(itemId: string, supplierId: string, qty: string, unitPrice: string, orderDate: string, promiseDate: string) {
        this.itemId = itemId;
        this.supplierId = supplierId;
        this.qty = qty;
        this.unitPrice = unitPrice;
        this.orderDate = orderDate;
        this.promiseDate = promiseDate;
    }
}