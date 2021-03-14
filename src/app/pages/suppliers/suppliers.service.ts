import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  private suppliers: Supplier[] = [];
  private suppliersChanged = new Subject<Supplier[]>();
  private selectedSupplier: Supplier;
  private selectedSupplierChanged = new Subject<Supplier>();
  
  private allsuppliersUrl = 'https://quiet-reaches-22008.herokuapp.com/allsuppliers/'; 

  constructor(private http: HttpClient) { }

  setsuppliers(suppliers: Supplier[]) {
    this.suppliers = suppliers;
    this.suppliersChanged.next(this.suppliers.slice());
  }

  getsuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.allsuppliersUrl)
      .pipe(catchError(this.handleError<Supplier[]>('getsuppliers', []))
      );
  }

  setSupplier(supplier: Supplier) {
    this.selectedSupplier = supplier; 
    this.selectedSupplierChanged.next(this.selectedSupplier);
  }

  getSupplier() {
    return this.selectedSupplier;
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
