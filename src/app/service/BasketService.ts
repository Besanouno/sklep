import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Product} from '../model/Product';
import {Observable} from 'rxjs/internal/Observable';
import {ProductInBasket} from '../model/ProductInBasket';
import { map } from 'rxjs/operators';

@Injectable()
export class BasketService {
  private itemsInCartSubject: BehaviorSubject<ProductInBasket[]> = new BehaviorSubject([]);
  private itemsInCart: ProductInBasket[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public add(item: Product) {
    const itemInCart = this.itemIsInCart(item);
    if (itemInCart != null) {
      itemInCart.amount++;
    } else {
      const productInBasket = new ProductInBasket(item);
      this.itemsInCartSubject.next([...this.itemsInCart, productInBasket]);
    }
    console.log(this.itemsInCart);
  }

  public removeOne(item: Product) {
    const itemInCart = this.itemIsInCart(item);
    if (itemInCart != null) {
      if (itemInCart.amount === 1) {
        this.remove(item);
      } else {
        itemInCart.amount--;
      }
    }
  }

  public remove(item: Product) {
    this.itemsInCart = this.itemsInCart.filter(i => {
      return !(i.product.id === item.id);
    });
    console.log(this.itemsInCart);
  }

  private itemIsInCart(item: Product) {
    return this.itemsInCart.find(_ => _.product.id === item.id);
  }

  public getTotalPrice(): Observable<number> {
    return this.itemsInCartSubject.pipe(map((items: ProductInBasket[]) => {
      return items.reduce((prev, curr: ProductInBasket) => {
        return prev + curr.product.price * curr.amount;
      }, 0);
    }));
  }

  public getAmount(): Observable<number> {
    return this.itemsInCartSubject.pipe(map((items: ProductInBasket[]) => {
      return items.reduce((prev, curr: ProductInBasket) => {
        return prev + curr.amount;
      }, 0);
    }));
  }

  public getItems(): Observable<ProductInBasket[]> {
    return this.itemsInCartSubject.asObservable();
  }
}
