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
  }

  goToStepFour() {
    this.router.navigateByUrl('/pages/order-entry-step-four');
  }
}
