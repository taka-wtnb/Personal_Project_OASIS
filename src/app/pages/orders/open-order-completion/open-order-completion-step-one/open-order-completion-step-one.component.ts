import { Component, OnInit } from '@angular/core';

import { OpenOrder } from '../../open-order';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'ngx-open-order-completion-step-one',
  templateUrl: './open-order-completion-step-one.component.html',
  styleUrls: ['./open-order-completion-step-one.component.scss']
})
export class OpenOrderCompletionStepOneComponent implements OnInit {
  openOrders: OpenOrder[] = [];

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.getAllOpenOrders();
  }

  getAllOpenOrders(): void {
    this.orderService.getOpenOrders()
      .subscribe(openOrders => {
        this.openOrders = openOrders;
        console.log(this.openOrders);
        this.orderService.setOpenOrders(this.openOrders);
      });
  }

  onSelectedOpenOrder(openOrder: OpenOrder): void {
    this.orderService.setOpenOrder(openOrder);
  }
}
