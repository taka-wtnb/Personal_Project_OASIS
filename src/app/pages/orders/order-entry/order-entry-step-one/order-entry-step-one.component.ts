import { Component, OnInit } from '@angular/core';
import { Item } from '../../../items/item';
import { ItemsService } from '../../../items/items.service';

@Component({
  selector: 'ngx-order-entry-step-one',
  templateUrl: './order-entry-step-one.component.html',
  styleUrls: ['./order-entry-step-one.component.scss']
})
export class OrderEntryStepOneComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemsService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems(): void {
    this.itemService.getItems()
      .subscribe(items => {
        this.items = items;
        console.log(this.items);
        //this.orderService.setOpenOrders(this.openOrders);
      });
  }

  onSelectedItem(item: Item): void {
    this.itemService.setItem(item);
  }

}
