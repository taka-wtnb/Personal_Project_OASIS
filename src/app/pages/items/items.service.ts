import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: Item[] = [];
  private itemsChanged = new Subject<Item[]>();
  private selectedItem: Item;
  private selectedItemChanged = new Subject<Item>();
  
  private allItemsUrl = 'https://quiet-reaches-22008.herokuapp.com/allitems/'; 

  constructor(private http: HttpClient) { }

  setItems(items: Item[]) {
    this.items = items;
    this.itemsChanged.next(this.items.slice());
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.allItemsUrl)
      .pipe(catchError(this.handleError<Item[]>('getItems', []))
      );
  }

  setItem(item: Item) {
    this.selectedItem = item; 
    this.selectedItemChanged.next(this.selectedItem);
  }

  getItem() {
    return this.selectedItem;
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
