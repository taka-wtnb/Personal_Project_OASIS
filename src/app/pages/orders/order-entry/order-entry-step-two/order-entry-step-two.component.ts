import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDateService } from '@nebular/theme';
import { Item } from '../../../items/item';
import { ItemsService } from '../../../items/items.service';
import { PriceIncreaseReason } from '../../../price-increase/price-increase-reason';
import { PriceIncreaseService } from '../../../price-increase/price-increase.service';
import { Supplier } from '../../../suppliers/supplier';
import { SuppliersService } from '../../../suppliers/suppliers.service';
import { OrderEntryDTO } from '../../order-entry-dto';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'ngx-order-entry-step-two',
  templateUrl: './order-entry-step-two.component.html',
  styleUrls: ['./order-entry-step-two.component.scss']
})
export class OrderEntryStepTwoComponent implements OnInit {

  item: Item;
  itm: Item;
  id: number;
  min: Date;
  // max: Date;
  suppliers: Supplier[] = [];
  // supplier: Supplier;

  // selectedItem;
  // delayReasons: DelayReason[] = [];
  // isDelayReasonUndefined: boolean = false;
  order: OrderEntryDTO;
  // delayEntry: DelayEntryDTO;
  dateNow: string;
  params: any;

  constructor(
    private orderService: OrdersService,
    private itemsService: ItemsService,
    private suppliersService: SuppliersService,
    private priceIncreaseService: PriceIncreaseService,
    protected dateService: NbDateService<Date>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSuppliers();
    this.item = this.itemsService.getItem();
    if(this.item !== undefined && this.item !== null) {
      localStorage.setItem('itm', JSON.stringify(this.item));
      this.itm = JSON.parse(localStorage.getItem('itm'));
      this.min = this.dateService.addDay(new Date(), 0);
    }
    localStorage.setItem('itemToBuy', this.item.id.toString());
  }

  getSuppliers(): void {
    this.suppliersService.getsuppliers()
      .subscribe(suppliers => {
        this.suppliers = suppliers;
      });
  }

  onSelectedSupplier(supplier: Supplier): void {
    this.suppliersService.setSupplier(supplier);
  }
  
  onPlaceOrder(form: NgForm) {
    const value = form.value;
console.log(value.selectedSupplier, value.quantity, value.unitPrice, value.ecd);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    this.dateNow = yyyy + '-' + mm + '-' + dd;
    this.order = new OrderEntryDTO(this.item.id.toString(), value.selectedSupplier.id, value.quantity, value.unitPrice, this.dateNow, value.ecd);
    this.suppliersService.setSupplier(value.selectedSupplier);
    localStorage.setItem('supplierToBuy', value.selectedSupplier.id);
    
    this.params = new HttpParams()
      .set("itemId", this.item.id.toString())
      .set("supplierId", value.selectedSupplier.id); 
    
    this.orderService.getTwoMostRecentOrdersByItemAndSupplier(this.params)
      .subscribe(recentOrders => {
        if( (recentOrders.length > 0) && (value.unitPrice > recentOrders[0].unit_price) ) {
          this.priceIncreaseService.setIsPriceHigher(true);
          localStorage.setItem('isPriceIncreased', 'true');
          this.orderService.addNewOrderEntry(this.order);
          this.router.navigate(['/pages/order-entry-step-three']);
            //, {queryParams: {unitPrice: value.unitPrice, supplierId: value.selectedSupplier.id, itemId: this.item.id.toString()}});
          } else {
            this.priceIncreaseService.setIsPriceHigher(false);
            localStorage.setItem('isPriceIncreased', 'false');
            this.orderService.addNewOrderEntry(this.order);
            this.router.navigate(['/pages/order-entry-step-five']);
          }
        //this.orderService.setOpenOrders(this.openOrders);
      });
    // if(value.unitPrice > this.recentOrders[0].unit_price) {

    // } else {

    // }
  }

  // addDelay(orderId: string, pickedDate: string, delayReason: string): void {
  //   if(delayReason === undefined) {
  //     console.log('Please specify the delay reason.');
  //   } else {
  //     this.otd = new OnTimeDeliveryDTO(orderId, pickedDate, true);
  //     this.delayEntry = new DelayEntryDTO(orderId, delayReason);
  //     this.ordersService.addOpenOrderCompletion(this.otd);
  //     this.ordersService.addDelayEntry(this.delayEntry);
  //     this.ordersService.setOpenOrder(null);
  //     this.router.navigate(['/pages/open-order-completion-step-three'], {queryParams: {orderId: this.op.order_id}});
  //   }
  // }

  // closeOpenOrder(orderId: string, pickedDate: string): void {
  //   this.otd = new OnTimeDeliveryDTO(orderId, pickedDate, false);
  //   this.ordersService.addOpenOrderCompletion(this.otd);
  //   this.ordersService.setOpenOrder(null);
  //   this.router.navigate(['/pages/open-order-completion-step-three'], {queryParams: {orderId: this.op.order_id}});
  // }

}
