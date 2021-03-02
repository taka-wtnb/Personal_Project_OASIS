import { Component, OnInit } from '@angular/core';
import { NbDateService } from '@nebular/theme';
import { DelayReason } from '../../delay-reason';
import { OnTimeDeliveryDTO } from '../../on-time-delivery';
// import { ActivatedRoute, Params, Router } from '@angular/router';
import { OpenOrder } from '../../open-order';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'ngx-open-order-completion-step-two',
  templateUrl: './open-order-completion-step-two.component.html',
  styleUrls: ['./open-order-completion-step-two.component.scss']
})
export class OpenOrderCompletionStepTwoComponent implements OnInit {
  
  openOrder: OpenOrder;
  op: OpenOrder;
  id: number;
  min: Date;
  max: Date;
  selectedItem;
  delayReasons: DelayReason[] = [];
  isDelayReasonUndefined: boolean = false;
  otd: OnTimeDeliveryDTO;

  constructor(
    private ordersService: OrdersService,
    protected dateService: NbDateService<Date>
  ) {}

  ngOnInit(): void {
    this.getDelayReasons();
    this.openOrder = this.ordersService.getOpenOrder();
    if(this.openOrder !== undefined && this.openOrder !== null) {
      localStorage.setItem('op', JSON.stringify(this.openOrder));
    }
    this.op = JSON.parse(localStorage.getItem('op'));
    this.min = this.dateService.addDay(new Date(this.op.order_date), 0);
    this.max = this.dateService.addDay(this.dateService.today(), 0);
  }

  getDelayReasons(): void {
    this.ordersService.getDelayReasons()
      .subscribe(delayReasons => {
        this.delayReasons = delayReasons;
        console.log(this.delayReasons);
      });
  }

  addDelay(orderId: string, pickedDate: string, delayReason: string): void {
    console.log("Date: " + pickedDate + ", Reason: " + delayReason);
    this.otd = new OnTimeDeliveryDTO(orderId, pickedDate, true);
  }

  closeOpenOrder(orderId: string, pickedDate: string): void {
    console.log("Order ID: " + orderId + ", Date: " + pickedDate);
    this.otd = new OnTimeDeliveryDTO(orderId, pickedDate, false);
    this.ordersService.addOpenOrderCompletion(this.otd);
  }
  
}