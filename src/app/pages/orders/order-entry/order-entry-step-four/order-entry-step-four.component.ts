import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../../items/items.service';
import { PriceIncreaseEntryDTO } from '../../../price-increase/price-increase-entry-dto';
import { PriceIncreaseReason } from '../../../price-increase/price-increase-reason';
import { PriceIncreaseService } from '../../../price-increase/price-increase.service';
import { SuppliersService } from '../../../suppliers/suppliers.service';
import { OpenOrder } from '../../open-order';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'ngx-order-entry-step-four',
  templateUrl: './order-entry-step-four.component.html',
  styleUrls: ['./order-entry-step-four.component.scss']
})
export class OrderEntryStepFourComponent implements OnInit {

  isPriceHigher: boolean;

  // closedOrder: ClosedOrder;
  // cp: ClosedOrder;
  // id: number;

  recentOrders: OpenOrder[] = [];
  priceChangeCategories: PriceIncreaseReason[] = [];
  priceIncreaseEntry: PriceIncreaseEntryDTO;
  itemId: any;
  supplierId: any;
  params: any;

  constructor(    
    private orderService: OrdersService,
    private priceIncreaseService: PriceIncreaseService,
    private itemsService: ItemsService,
    private suppliersService: SuppliersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isPriceHigher = localStorage.getItem('isPriceIncreased') == 'true' ? true : false;
    // this.isPriceHigher = this.priceIncreaseService.getIsPriceHigher();
    this.getPriceIncreaseReasons();
    // this.itemId = this.route.snapshot.queryParamMap.get('itemId');
    // this.supplierId = this.route.snapshot.queryParamMap.get('supplierId');

    // if( (this.itemsService.getItem() != null && this.itemsService.getItem() != undefined) 
      // && (this.suppliersService.getSupplier() != null && this.suppliersService.getSupplier() != undefined) ) {

    this.params = new HttpParams()
      .set("itemId", localStorage.getItem('itemToBuy'))
      .set("supplierId", localStorage.getItem('supplierToBuy')); 
    this.getRecentOrders(this.params);
    // }


    // check if there are two orders
    // if(this.recentOrders.length >= 2) {
    //   // check if the new order's unit price is higher than the previous one
    //   if(this.recentOrders[0].unit_price > this.recentOrders[1].unit_price) {
    //     // if so, set the flag, if not clear it
    //     this.isPriceHigher = true;
    //     // if so, also get the price increase reasons
    //   }
    // }

    // not here - clear the flag
    // not here - clear the supplier
    // not here - clear the item
  }

  getPriceIncreaseReasons(): void {
    this.priceIncreaseService.getPriceChangeCategories()
      .subscribe(priceChangeCategories => {
        this.priceChangeCategories = priceChangeCategories;
      });
  }

  getRecentOrders(params: HttpParams): void {
    this.orderService.getTwoMostRecentOrdersByItemAndSupplier(params)
      .subscribe(recentOrders => {
        this.recentOrders = recentOrders;
        this.orderService.setRecentOrders(this.recentOrders);
      });
  }

  addPriceIncrease(reasonId: number) {
    if(reasonId === undefined) {
      console.log('Please specify the price increase reason.');
    } else {
      this.priceIncreaseEntry = new PriceIncreaseEntryDTO(this.recentOrders[0].order_id.toString(), reasonId.toString());
      this.priceIncreaseService.addPriceIncreaseEntry(this.priceIncreaseEntry);
      // this.orderService.setTwoMostRecentOrdersByItemAndSupplier(null);
      this.priceIncreaseService.setIsPriceHigher(false);
      localStorage.setItem('isPriceIncreased', 'false');
      this.router.navigate(['/pages/order-entry-step-five'], {queryParams: {orderId: this.recentOrders[0].order_id.toString()}});
    }
  }

}
