import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { RecentOrder } from '../recent-order';

@Component({
  selector: 'ngx-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit {

  recentOrders: RecentOrder[] = [];

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.getRecentOrders();
  }

  getRecentOrders(): void {
    this.orderService.getRecentOrders()
      .subscribe(recentOrders => {
        this.recentOrders = recentOrders;
      });
  }

}
