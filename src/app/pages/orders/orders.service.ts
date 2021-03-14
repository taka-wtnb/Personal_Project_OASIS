import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { OpenOrder } from './open-order';
import { DelayReason } from './delay-reason';
import { OnTimeDeliveryDTO } from './on-time-delivery-dto';
import { DelayEntryDTO } from './delay-entry-dto';
import { OrderEntryDTO } from './order-entry-dto';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private openOrders: OpenOrder[] = [];
  private openOrdersChanged = new Subject<OpenOrder[]>();
  private selectedOpenOrder: OpenOrder;
  private selectedOpenOrderChanged = new Subject<OpenOrder>();

  private delayReasons: DelayReason[] = [];
  private delayReasonsChanged = new Subject<DelayReason[]>();

  private newOrderEntryUrl = 'https://quiet-reaches-22008.herokuapp.com/neworderentry/'; 
  private allOpenOrdersUrl = 'https://quiet-reaches-22008.herokuapp.com/allopenorders/'; 
  private delayReasonsUrl = 'https://quiet-reaches-22008.herokuapp.com/delayReasons/'; 
  private openOrderCompletionUrl = 'https://quiet-reaches-22008.herokuapp.com/openordercompletion/';
  private delayEntryUrl = 'https://quiet-reaches-22008.herokuapp.com/delayentry/';

  constructor(private http: HttpClient) { }

  addNewOrderEntry(order: OrderEntryDTO) {
    this.http.post(this.newOrderEntryUrl, order)
      .subscribe(response => { console.log(response); });
  }

  setOpenOrders(openOrders: OpenOrder[]) {
    this.openOrders = openOrders;
    this.openOrdersChanged.next(this.openOrders.slice());
  }

  getOpenOrders(): Observable<OpenOrder[]> {
    return this.http.get<OpenOrder[]>(this.allOpenOrdersUrl)
      .pipe(catchError(this.handleError<OpenOrder[]>('getAllOpenOrders', []))
      );
  }

  setOpenOrder(openOrder: OpenOrder) {
    this.selectedOpenOrder = openOrder; 
    this.selectedOpenOrderChanged.next(this.selectedOpenOrder);
  }

  getOpenOrder() {
    return this.selectedOpenOrder;
  }

  getDelayReasons(): Observable<DelayReason[]> {
    return this.http.get<DelayReason[]>(this.delayReasonsUrl)
    .pipe(catchError(this.handleError<DelayReason[]>('getDelayReasons', []))
    );
  }

  addOpenOrderCompletion(otd: OnTimeDeliveryDTO) {
    this.http.post(this.openOrderCompletionUrl, otd)
      .subscribe(response => { console.log(response); });
  }

  addDelayEntry(delayEntry: DelayEntryDTO) {
    this.http.post(this.delayEntryUrl, delayEntry)
      .subscribe(response => { console.log(response); });
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
