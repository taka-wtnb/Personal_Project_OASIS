import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PriceIncreaseEntryDTO } from './price-increase-entry-dto';
import { PriceIncreaseReason } from './price-increase-reason';

@Injectable({
  providedIn: 'root'
})
export class PriceIncreaseService {

  private priceChangeCategories: PriceIncreaseReason[] = [];
  private priceChangeCategoriesChanged = new Subject<PriceIncreaseReason[]>();
  private selectedPriceChangeCategory: PriceIncreaseReason;
  private selectedPriceChangeCategoryChanged = new Subject<PriceIncreaseReason>();
  private isPriceHigher: boolean;
  private isPriceHigherChanged = new Subject<boolean>();

  private priceChangeCategoriesUrl = 'https://quiet-reaches-22008.herokuapp.com/pricechangecategories/'; 
  private priceIncreaseEntryUrl = 'https://quiet-reaches-22008.herokuapp.com/priceincreaseentry/'; 

  constructor(private http: HttpClient) { }

  setsPriceChangeCategories(priceChangeCategories: PriceIncreaseReason[]) {
    this.priceChangeCategories = priceChangeCategories;
    this.priceChangeCategoriesChanged.next(this.priceChangeCategories.slice());
  }
  
  getPriceChangeCategories(): Observable<PriceIncreaseReason[]> {
    return this.http.get<PriceIncreaseReason[]>(this.priceChangeCategoriesUrl)
      .pipe(catchError(this.handleError<PriceIncreaseReason[]>('getsuppliers', []))
      );
  }

  setPriceChangeCategory(priceChangeCategory: PriceIncreaseReason) {
    this.selectedPriceChangeCategory = priceChangeCategory; 
    this.selectedPriceChangeCategoryChanged.next(this.selectedPriceChangeCategory);
  }

  getPriceChangeCategory() {
    return this.selectedPriceChangeCategory;
  }

  setIsPriceHigher(isPriceHigher: boolean) {
    this.isPriceHigher = isPriceHigher; 
    this.isPriceHigherChanged.next(this.isPriceHigher);
  }

  getIsPriceHigher() {
    return this.isPriceHigher;
  }
  
  addPriceIncreaseEntry(priceIncreaseEntry: PriceIncreaseEntryDTO) {
    this.http.post(this.priceIncreaseEntryUrl, priceIncreaseEntry)
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
