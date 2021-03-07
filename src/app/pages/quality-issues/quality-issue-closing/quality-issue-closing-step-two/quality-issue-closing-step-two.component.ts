import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDateService } from '@nebular/theme';
import { PendingQualityIssue } from '../../pending-quality-issue';
import { QualityIssueClosingDTO } from '../../quality-issue-closing-dto';
import { QualityIssuesService } from '../../quality-issues.service';

@Component({
  selector: 'ngx-quality-issue-closing-step-two',
  templateUrl: './quality-issue-closing-step-two.component.html',
  styleUrls: ['./quality-issue-closing-step-two.component.scss']
})
export class QualityIssueClosingStepTwoComponent implements OnInit {

  pendingQualityIssue: PendingQualityIssue;
  pqi: PendingQualityIssue;
  id: number;
  min: Date;
  max: Date;
  qualityIssueClosing: QualityIssueClosingDTO;

  constructor(
    private qualityIssuesService: QualityIssuesService,
    protected dateService: NbDateService<Date>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pendingQualityIssue = this.qualityIssuesService.getPendingQualityIssue();
    if(this.pendingQualityIssue !== undefined && this.pendingQualityIssue !== null) {
      localStorage.setItem('pqi', JSON.stringify(this.pendingQualityIssue));
      this.pqi = JSON.parse(localStorage.getItem('pqi'));
      this.min = this.dateService.addDay(new Date(this.pqi.date_detected), 0);
      this.max = this.dateService.addDay(this.dateService.today(), 0);
    }
  }

  closePendingQualityIssue(orderId: string, dateClosed: string): void {
    this.qualityIssueClosing = new QualityIssueClosingDTO(orderId, dateClosed);
    this.qualityIssuesService.updateQualityIssueEntry(this.qualityIssueClosing);
    this.qualityIssuesService.setPendingQualityIssue(null);
    this.router.navigate(['/pages/quality-issue-closing-step-three'], {queryParams: {orderId: this.pqi.order_id}});
  }
  
}
