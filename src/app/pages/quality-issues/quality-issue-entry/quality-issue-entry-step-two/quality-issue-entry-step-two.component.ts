import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDateService } from '@nebular/theme';
import { ClosedOrder } from '../../closed-order';
import { QualityIssueEntryDTO } from '../../quality-issue-entry-dto';
import { QualityIssuesService } from '../../quality-issues.service';
import { QualityIssueCategory } from '../../quality-issue-category';

@Component({
  selector: 'ngx-quality-issue-entry-step-two',
  templateUrl: './quality-issue-entry-step-two.component.html',
  styleUrls: ['./quality-issue-entry-step-two.component.scss']
})
export class QualityIssueEntryStepTwoComponent implements OnInit {

  closedOrder: ClosedOrder;
  cp: ClosedOrder;
  id: number;
  min: Date;
  max: Date;
  qualityIssueCategories: QualityIssueCategory[] = [];
  qualityIssueEntry: QualityIssueEntryDTO;

  constructor(
    private qualityIssuesService: QualityIssuesService,
    protected dateService: NbDateService<Date>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getQualityIssueCategories();
    this.closedOrder = this.qualityIssuesService.getClosedOrder();
    if(this.closedOrder !== undefined && this.closedOrder !== null) {
      localStorage.setItem('cp', JSON.stringify(this.closedOrder));
      this.cp = JSON.parse(localStorage.getItem('cp'));
      this.min = this.dateService.addDay(new Date(this.cp.delivery_date), 0);
      this.max = this.dateService.addDay(this.dateService.today(), 0);
    }
  }

  getQualityIssueCategories(): void {
    this.qualityIssuesService.getQualityIssueCategories()
      .subscribe(qualityIssueCategories => {
        this.qualityIssueCategories = qualityIssueCategories;
      });
  }

  addQualityIssue(orderId: string, qualityIssueType: string, reportingDate: string): void {
    if(qualityIssueType === undefined) {
      console.log('Please specify the quality issue type.');
    } else {
      this.qualityIssueEntry = new QualityIssueEntryDTO(orderId, qualityIssueType, reportingDate);
      this.qualityIssuesService.addQualityIssueEntry(this.qualityIssueEntry);
      this.qualityIssuesService.setClosedOrder(null);
      this.router.navigate(['/pages/quality-issue-entry-step-three'], {queryParams: {orderId: this.cp.order_id}});
    }
  }
}
