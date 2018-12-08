import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Product} from '../model/Product';
import {Observable} from 'rxjs/internal/Observable';
import {ProductInBasket} from '../model/ProductInBasket';
import { map } from 'rxjs/operators';

@Injectable()
export class BasketService {
  private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private itemsInCart: Product[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public add(product: Product) {
      this.itemsInCartSubject.next([...this.itemsInCart, product]);
  }

  public removeOne(product: Product) {
    let currentItems = [...this.itemsInCart];
    if (currentItems.length > 1) {
      currentItems.splice(currentItems.indexOf(product), 1);
    } else {
      currentItems = [];
    }
    this.itemsInCartSubject.next(currentItems);
  }

  public itemIsInCart(item: Product): boolean {
    return this.itemsInCart.find(_ => _.id === item.id) != null;
  }

  public getTotalPrice(): Observable<number> {
    return this.itemsInCartSubject.pipe(map((items: Product[]) => {
      return items.reduce((prev, curr: Product) => {
        return prev + curr.price;
      }, 0);
    }));
  }

  public getItems(): Observable<Product[]> {
    return this.itemsInCartSubject.asObservable();
  }
}
