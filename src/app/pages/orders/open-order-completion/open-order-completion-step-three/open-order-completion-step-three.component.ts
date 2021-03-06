import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-open-order-completion-step-three',
  templateUrl: './open-order-completion-step-three.component.html',
  styleUrls: ['./open-order-completion-step-three.component.scss']
})
export class OpenOrderCompletionStepThreeComponent implements OnInit {
  
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
    this.router.navigateByUrl('/pages/open-order-completion-step-one');
  }
}
