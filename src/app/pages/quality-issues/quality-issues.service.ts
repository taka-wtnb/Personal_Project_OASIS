import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ClosedOrder } from './closed-order';
import { PendingQualityIssue } from './pending-quality-issue';
import { QualityIssueClosingDTO } from './quality-issue-closing-dto';
import { QualityIssueEntryDTO } from './quality-issue-entry-dto';
import { QualityIssueCategory } from './quality-issue-category';
import { RecentQualityIssue } from './recent-quality-issue';

@Injectable({
  providedIn: 'root'
})
export class QualityIssuesService {
  
  private closedOrders: ClosedOrder[] = [];
  private closedOrdersChanged = new Subject<ClosedOrder[]>();
  private selectedClosedOrder: ClosedOrder;
  private selectedClosedOrderChanged = new Subject<ClosedOrder>();
  private pendingQualityIssues: PendingQualityIssue[] = [];
  private pendingQualityIssuesChanged = new Subject<PendingQualityIssue[]>();
  private selectedPendingQualityIssue: PendingQualityIssue;
  private selectedPendingQualityIssueChanged = new Subject<PendingQualityIssue>();

  private recentQualityIssues: RecentQualityIssue[] = [];
  private recentQualityIssuesChanged = new Subject<RecentQualityIssue[]>(); 

  private closedOrdersUrl = 'https://quiet-reaches-22008.herokuapp.com/closedorders/'; 
  private qualityIssueCategoriesUrl = 'https://quiet-reaches-22008.herokuapp.com/qualityissuecategories/'; 
  private qualityIssueEntryUrl = 'https://quiet-reaches-22008.herokuapp.com/qualityissueentry/';
  private pendingQualityIssuesUrl = 'https://quiet-reaches-22008.herokuapp.com/pendingqualityissues/'; 
  private qualityIssueClosingUrl = 'https://quiet-reaches-22008.herokuapp.com/qualityissueclosing/';
  private recentQualityIssuesUrl = 'https://quiet-reaches-22008.herokuapp.com/recentqualityissues/';

  constructor(private http: HttpClient) { }
  
  setClosedOrders(closedOrders: ClosedOrder[]) {
    this.closedOrders = closedOrders;
    this.closedOrdersChanged.next(this.closedOrders.slice());
  }
  
  getClosedOrders(): Observable<ClosedOrder[]> {
    return this.http.get<ClosedOrder[]>(this.closedOrdersUrl)
    .pipe(catchError(this.handleError<ClosedOrder[]>('getClosedOrders', []))
    );
  }
  
  setClosedOrder(closedOrder: ClosedOrder) {
    this.selectedClosedOrder = closedOrder; 
    this.selectedClosedOrderChanged.next(this.selectedClosedOrder);
  }
  
  getClosedOrder() {
    return this.selectedClosedOrder;
  }
  
  getQualityIssueCategories(): Observable<QualityIssueCategory[]> {
    return this.http.get<QualityIssueCategory[]>(this.qualityIssueCategoriesUrl)
    .pipe(catchError(this.handleError<QualityIssueCategory[]>('getQualityIssueCategories', []))
    );
  }

  setPendingQualityIssues(pendingQualityIssues: PendingQualityIssue[]) {
    this.pendingQualityIssues = pendingQualityIssues;
    this.pendingQualityIssuesChanged.next(this.pendingQualityIssues.slice());
  }
  
  getPendingQualityIssues(): Observable<PendingQualityIssue[]> {
    return this.http.get<PendingQualityIssue[]>(this.pendingQualityIssuesUrl)
    .pipe(catchError(this.handleError<PendingQualityIssue[]>('getPendingQualityIssues', []))
    );
  }

  setPendingQualityIssue(pendingQualityIssue: PendingQualityIssue) {
    this.selectedPendingQualityIssue = pendingQualityIssue; 
    this.selectedPendingQualityIssueChanged.next(this.selectedPendingQualityIssue);
  }
  
  getPendingQualityIssue() {
    return this.selectedPendingQualityIssue;
  }

  addQualityIssueEntry(qualityIssueEntry: QualityIssueEntryDTO) {
    this.http.post(this.qualityIssueEntryUrl, qualityIssueEntry)
    .subscribe(response => { console.log(response); });
  }
  
  updateQualityIssueEntry(qualityIssueClosing: QualityIssueClosingDTO) {
    this.http.put(this.qualityIssueClosingUrl, qualityIssueClosing)
    .subscribe(response => { console.log(response); });
  }

  setRecentQualityIssues(recentQualityIssues: RecentQualityIssue[]) {
    this.recentQualityIssues = recentQualityIssues;
    this.recentQualityIssuesChanged.next(this.recentQualityIssues.slice());
  }

  getRecentQualityIssues(): Observable<RecentQualityIssue[]> {
    return this.http.get<RecentQualityIssue[]>(this.recentQualityIssuesUrl)
      .pipe(catchError(this.handleError<RecentQualityIssue[]>('getRecentQualityIssues', []))
      );
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
