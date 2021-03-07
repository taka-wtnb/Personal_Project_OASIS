import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-quality-issue-entry-step-three',
  templateUrl: './quality-issue-entry-step-three.component.html',
  styleUrls: ['./quality-issue-entry-step-three.component.scss']
})
export class QualityIssueEntryStepThreeComponent implements OnInit {

  orderId: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: NbMenuService
  ) {}
  
  ngOnInit(): void {
    this.orderId = this.route.snapshot.queryParamMap.get('orderId');
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  goBackToStepOne() {
    this.router.navigateByUrl('/pages/quality-issue-entry-step-one');
  }

}
