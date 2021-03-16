export interface RecentQualityIssue {
    id: number;
    supplier_id: number;
    order_id: number;
    category_id: number;
    date_detected: string;
    date_closed: string;
}