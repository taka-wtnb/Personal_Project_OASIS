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
  selector: 'ngx-order-entry-step-three',
  templateUrl: './order-entry-step-three.component.html',
  styleUrls: ['./order-entry-step-three.component.scss']
})
export class OrderEntryStepThreeComponent implements OnInit {

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
  unitPrice: any;

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
    // this.priceIncreaseService.getIsPriceHigher();
//     this.unitPrice = this.route.snapshot.queryParamMap.get('unitPrice');
//     this.itemId = this.route.snapshot.queryParamMap.get('itemId');
//     this.supplierId = this.route.snapshot.queryParamMap.get('supplierId');

//     this.params = new HttpParams()
//       .set("itemId", this.itemId)
//       .set("supplierId", this.supplierId); 
    
//     this.getRecentOrders(this.params);

//     // check if there are two orders
//     if(this.recentOrders.length >= 1) {
//       // check if the new order's unit price is higher than the previous one
//       if(this.unitPrice > this.recentOrders[0].unit_price) {
//         // if so, set the flag, if not clear it
//         this.isPriceHigher = this.priceIncreaseService.getIsPriceHigher();
// console.log(this.isPriceHigher, this.unitPrice, this.recentOrders[0].unit_price);
//         // if so, also get the price increase reasons
//         this.getPriceIncreaseReasons();
//       }
//     }

    // not here - clear the flag
    // not here - clear the supplier
    // not here - clear the item
  }

  // getPriceIncreaseReasons(): void {
  //   this.priceIncreaseService.getPriceChangeCategories()
  //     .subscribe(priceChangeCategories => {
  //       this.priceChangeCategories = priceChangeCategories;
  //     });
  // }

  // getRecentOrders(params: HttpParams): void {
  //   this.orderService.getTwoMostRecentOrdersByItemAndSupplier(params)
  //     .subscribe(recentOrders => {
  //       this.recentOrders = recentOrders;
  //       console.log(this.recentOrders);
  //       //this.orderService.setOpenOrders(this.openOrders);
  //     });
  // }

  goToStepFour() {
    this.router.navigateByUrl('/pages/order-entry-step-four');
  }
}
