import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-quality-issue-closing-step-three',
  templateUrl: './quality-issue-closing-step-three.component.html',
  styleUrls: ['./quality-issue-closing-step-three.component.scss']
})
export class QualityIssueClosingStepThreeComponent implements OnInit {
  orderId: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: NbMenuService
  ) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.queryParamMap.get('orderId');
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  goBackToStepOne() {
    this.router.navigateByUrl('/pages/quality-issue-closing-step-one');
  }

}
