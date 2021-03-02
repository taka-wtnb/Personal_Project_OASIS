import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { OpenOrder } from './open-order';
import { Subject } from 'rxjs';
import { DelayReason } from './delay-reason';
import { OnTimeDeliveryDTO } from './on-time-delivery';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private openOrders: OpenOrder[] = [];
  private openOrderChanged = new Subject<OpenOrder[]>();
  private selectedOpenOrder: OpenOrder;
  private selectedOrderChanged = new Subject<OpenOrder>();
  private delayReasons: DelayReason[] = [];
  private delayReasonChanged = new Subject<DelayReason[]>();

  private allOpenOrdersUrl = 'http://localhost:3002/allopenorders/'; 
  private delayReasonsUrl = 'http://localhost:3002/delayReasons/'; 
  private openOrderCompletionUrl = 'http://localhost:3002/openordercompletion/';

  constructor(private http: HttpClient) { }

  setOpenOrders(openOrders: OpenOrder[]) {
    this.openOrders = openOrders;
    this.openOrderChanged.next(this.openOrders.slice());
  }

  /** GET open orders from the server */
  getOpenOrders(): Observable<OpenOrder[]> {
    return this.http.get<OpenOrder[]>(this.allOpenOrdersUrl)
      .pipe(catchError(this.handleError<OpenOrder[]>('getAllOpenOrders', []))
      );
  }

  setOpenOrder(openOrder: OpenOrder) {
    this.selectedOpenOrder = openOrder; 
    this.selectedOrderChanged.next(this.selectedOpenOrder);
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
