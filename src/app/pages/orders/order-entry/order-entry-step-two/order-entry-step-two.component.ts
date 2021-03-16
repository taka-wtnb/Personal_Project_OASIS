import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDateService } from '@nebular/theme';
import { Item } from '../../../items/item';
import { ItemsService } from '../../../items/items.service';
import { PriceIncreaseService } from '../../../price-increase/price-increase.service';
import { Supplier } from '../../../suppliers/supplier';
import { SuppliersService } from '../../../suppliers/suppliers.service';
import { OrderEntryDTO } from '../../order-entry-dto';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'ngx-order-entry-step-two',
  templateUrl: './order-entry-step-two.component.html',
  styleUrls: ['./order-entry-step-two.component.scss']
})
export class OrderEntryStepTwoComponent implements OnInit {

  item: Item;
  itm: Item;
  id: number;
  min: Date;
  suppliers: Supplier[] = [];
  order: OrderEntryDTO;
  dateNow: string;
  params: any;

  constructor(
    private orderService: OrdersService,
    private itemsService: ItemsService,
    private suppliersService: SuppliersService,
    private priceIncreaseService: PriceIncreaseService,
    protected dateService: NbDateService<Date>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSuppliers();
    this.item = this.itemsService.getItem();
    if(this.item !== undefined && this.item !== null) {
      localStorage.setItem('itm', JSON.stringify(this.item));
      this.itm = JSON.parse(localStorage.getItem('itm'));
      this.min = this.dateService.addDay(new Date(), 0);
    }
    localStorage.setItem('itemToBuy', this.item.id.toString());
  }

  getSuppliers(): void {
    this.suppliersService.getsuppliers()
      .subscribe(suppliers => {
        this.suppliers = suppliers;
      });
  }

  onSelectedSupplier(supplier: Supplier): void {
    this.suppliersService.setSupplier(supplier);
  }
  
  onPlaceOrder(form: NgForm) {
    const value = form.value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    this.dateNow = yyyy + '-' + mm + '-' + dd;
    this.order = new OrderEntryDTO(this.item.id.toString(), value.selectedSupplier.id, value.quantity, value.unitPrice, this.dateNow, value.ecd);
    this.suppliersService.setSupplier(value.selectedSupplier);
    localStorage.setItem('supplierToBuy', value.selectedSupplier.id);
    
    this.params = new HttpParams()
      .set("itemId", this.item.id.toString())
      .set("supplierId", value.selectedSupplier.id); 
    
    this.orderService.getTwoMostRecentOrdersByItemAndSupplier(this.params)
      .subscribe(recentOrders => {
        if( (recentOrders.length > 0) && (value.unitPrice > recentOrders[0].unit_price) ) {
          this.priceIncreaseService.setIsPriceHigher(true);
          localStorage.setItem('isPriceIncreased', 'true');
          this.orderService.addNewOrderEntry(this.order);
          this.router.navigate(['/pages/order-entry-step-three']);
          } else {
            this.priceIncreaseService.setIsPriceHigher(false);
            localStorage.setItem('isPriceIncreased', 'false');
            this.orderService.addNewOrderEntry(this.order);
            this.router.navigate(['/pages/order-entry-step-five']);
          }
      });
  }

}
