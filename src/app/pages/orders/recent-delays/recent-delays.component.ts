import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { RecentDelay } from '../recent-delay';

@Component({
  selector: 'ngx-recent-delays',
  templateUrl: './recent-delays.component.html',
  styleUrls: ['./recent-delays.component.scss']
})
export class RecentDelaysComponent implements OnInit {

  recentDelays: RecentDelay[] = [];

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.getRecentDelays();
  }

  getRecentDelays(): void {
    this.orderService.getRecentDelays()
      .subscribe(recentDelays => {
        this.recentDelays = recentDelays;
      });
  }

}
