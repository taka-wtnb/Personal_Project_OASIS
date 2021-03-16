import { Component, OnInit } from '@angular/core';
import { ClosedOrder } from '../../closed-order';
import { QualityIssuesService } from '../../quality-issues.service';

@Component({
  selector: 'ngx-quality-issue-entry-step-one',
  templateUrl: './quality-issue-entry-step-one.component.html',
  styleUrls: ['./quality-issue-entry-step-one.component.scss']
})
export class QualityIssueEntryStepOneComponent implements OnInit {
  closedOrders: ClosedOrder[] = [];

  constructor(private qualityIssuesService: QualityIssuesService) { }

  ngOnInit(): void {
    this.getClosedOrders();
  }

  getClosedOrders(): void {
    this.qualityIssuesService.getClosedOrders()
      .subscribe(closedOrders => {
        this.closedOrders = closedOrders;
      });
  }

  onSelectedClosedOrder(closedOrder: ClosedOrder): void {
    this.qualityIssuesService.setClosedOrder(closedOrder);
  }

}
