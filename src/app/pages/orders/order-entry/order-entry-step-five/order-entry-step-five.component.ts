import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbMenuService } from '@nebular/theme';
import { ItemsService } from '../../../items/items.service';
import { PriceIncreaseService } from '../../../price-increase/price-increase.service';
import { SuppliersService } from '../../../suppliers/suppliers.service';
import { OpenOrder } from '../../open-order';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'ngx-order-entry-step-five',
  templateUrl: './order-entry-step-five.component.html',
  styleUrls: ['./order-entry-step-five.component.scss']
})
export class OrderEntryStepFiveComponent implements OnInit {
  
  item: string;
  supplier: string;
  params: any;
  recentOrders: OpenOrder[] = [];
  orderId: string;
  
  constructor(
    private orderService: OrdersService,
    private itemService: ItemsService,
    private supplierService: SuppliersService,
    private priceIncreaseService: PriceIncreaseService,
    private router: Router,
    private route: ActivatedRoute,
    private menuService: NbMenuService
  ) {}
  
  ngOnInit(): void {
    this.orderId = this.route.snapshot.queryParamMap.get('orderId');
    this.item = localStorage.getItem('itemToBuy');
    this.supplier = localStorage.getItem('supplierToBuy');

    if(this.item != undefined && this.item != null && this.supplier != undefined && this.supplier != null) {
      this.params = new HttpParams()
      .set("itemId", this.item)
      .set("supplierId", this.supplier); 
      this.getRecentOrders(this.params);
    }

    console.log(this.orderId);
  }

  getRecentOrders(params: HttpParams): void {
    this.orderService.getTwoMostRecentOrdersByItemAndSupplier(params)
      .subscribe(recentOrders => {
        this.recentOrders = recentOrders;
        this.orderService.setRecentOrders(this.recentOrders);
      });
  }

  goToHome() {
    this.clearItemAndSupplier();
    this.menuService.navigateHome();
  }

  goBackToStepOne() {
    this.clearItemAndSupplier();
    this.router.navigateByUrl('/pages/order-entry-step-one');
  }

  clearItemAndSupplier() {
    this.priceIncreaseService.setIsPriceHigher(false);
    this.itemService.setItem(null);
    this.supplierService.setSupplier(null);
    localStorage.setItem('isPriceIncreased', 'false');
    localStorage.setItem('itemToBuy', null);
    localStorage.setItem('supplierToBuy', null);
  }

}
