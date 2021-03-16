import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(   
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToOrderEntry() {
    this.router.navigateByUrl('/pages/order-entry-step-one');
  }

  goToOpenOrderCompletion() {
    this.router.navigateByUrl('/pages/open-order-completion-step-one');
  }

  goToQualityIssueEntry() {
    this.router.navigateByUrl('/pages/quality-issue-entry-step-one');
  }

  goToQualityIssueClosing() {
    this.router.navigateByUrl('/pages/quality-issue-closing-step-one');
  }

  goToRecentOrders() {
    this.router.navigateByUrl('/pages/recent-orders');
  }

  goToRecentPriceIncrease() {
    this.router.navigateByUrl('/pages/recent-price-increase');
  }

  goToRecentQualityIssues() {
    this.router.navigateByUrl('/pages/recent-quality-issues');
  }

}
