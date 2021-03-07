export interface PendingQualityIssue {
    order_id: number;
    supplier_code: string;
    item_num: string;
    item_name: string;
    category: string;
    date_detected: string;
}