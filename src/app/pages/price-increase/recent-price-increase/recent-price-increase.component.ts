import { Component, OnInit } from '@angular/core';
import { PriceIncreaseService } from '../price-increase.service';
import { RecentPriceIncrease } from '../recent-price-increase';

@Component({
  selector: 'ngx-recent-price-increase',
  templateUrl: './recent-price-increase.component.html',
  styleUrls: ['./recent-price-increase.component.scss']
})
export class RecentPriceIncreaseComponent implements OnInit {

  recentPriceIncrease: RecentPriceIncrease[] = [];

  constructor(private priceIncreaseService: PriceIncreaseService) { }

  ngOnInit(): void {
    this.getRecentPriceIncrease();
  }

  getRecentPriceIncrease(): void {
    this.priceIncreaseService.getRecentPriceIncrease()
      .subscribe(recentPriceIncrease => {
        this.recentPriceIncrease = recentPriceIncrease;
      });
  }

}
