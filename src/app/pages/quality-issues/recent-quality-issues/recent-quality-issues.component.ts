import { Component, OnInit } from '@angular/core';
import { QualityIssuesService } from '../quality-issues.service';
import { RecentQualityIssue } from '../recent-quality-issue';

@Component({
  selector: 'ngx-recent-quality-issues',
  templateUrl: './recent-quality-issues.component.html',
  styleUrls: ['./recent-quality-issues.component.scss']
})
export class RecentQualityIssuesComponent implements OnInit {

  recentQualityIssues: RecentQualityIssue[] = [];

  constructor(private qualityIssuesService: QualityIssuesService) { }

  ngOnInit(): void {
    this.getRecentQualityIssues();
  }

  getRecentQualityIssues(): void {
    this.qualityIssuesService.getRecentQualityIssues()
      .subscribe(recentQualityIssues => {
        this.recentQualityIssues = recentQualityIssues;
      });
  }

}
