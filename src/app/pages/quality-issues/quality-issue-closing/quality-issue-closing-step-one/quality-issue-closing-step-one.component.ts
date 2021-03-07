import { Component, OnInit } from '@angular/core';
import { PendingQualityIssue } from '../../pending-quality-issue';
import { QualityIssuesService } from '../../quality-issues.service';

@Component({
  selector: 'ngx-quality-issue-closing-step-one',
  templateUrl: './quality-issue-closing-step-one.component.html',
  styleUrls: ['./quality-issue-closing-step-one.component.scss']
})
export class QualityIssueClosingStepOneComponent implements OnInit {
  pendingQualityIssues: PendingQualityIssue[] = [];

  constructor(private qualityIssuesService: QualityIssuesService) { }

  ngOnInit(): void {
    this.getPendingQualityIssues();
  }

  getPendingQualityIssues(): void {
    this.qualityIssuesService.getPendingQualityIssues()
      .subscribe(pendingQualityIssues => {
        this.pendingQualityIssues = pendingQualityIssues;
        console.log(this.pendingQualityIssues);
        //this.orderService.setOpenOrders(this.openOrders);
      });
  }

  onSelectedPendingQualityIssue(pendingQualityIssue: PendingQualityIssue): void {
    this.qualityIssuesService.setPendingQualityIssue(pendingQualityIssue);
  }

}
