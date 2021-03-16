import { Component, OnInit } from '@angular/core';
import { PriceIncreaseReason } from '../../price-increase/price-increase-reason';
import { PriceIncreaseService } from '../../price-increase/price-increase.service';
import { QualityIssueCategory } from '../../quality-issues/quality-issue-category';
import { QualityIssuesService } from '../../quality-issues/quality-issues.service';

@Component({
  selector: 'ngx-entry-helper',
  templateUrl: './entry-helper.component.html',
  styleUrls: ['./entry-helper.component.scss']
})
export class EntryHelperComponent implements OnInit {

  priceIncreaseReasons: PriceIncreaseReason[] = [];
  qualityIssueCategories: QualityIssueCategory[] = [];

  constructor(
    private priceIncreaseService: PriceIncreaseService,
    private qualityIssuesService: QualityIssuesService
    ) { }

  ngOnInit(): void {
    this.getPriceIncreaseReasons();
    this.getQualityIssueCategories();
  }

  getPriceIncreaseReasons(): void {
    this.priceIncreaseService.getPriceChangeCategories()
      .subscribe(priceIncreaseReasons => {
        this.priceIncreaseReasons = priceIncreaseReasons;
      });
  }

  getQualityIssueCategories(): void {
    this.qualityIssuesService.getQualityIssueCategories()
      .subscribe(qualityIssueCategories => {
        this.qualityIssueCategories = qualityIssueCategories;
      });
  }

}
