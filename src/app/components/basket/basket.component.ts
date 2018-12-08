import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {Product} from '../../model/Product';
import {of} from 'rxjs/internal/observable/of';
import {BasketService} from '../../service/BasketService';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  public shoppingCartItems$: Observable<Product[]> = of([]);
  public shoppingCartItems: Product[] = [];

  constructor(private basketService: BasketService) {
    // this.shoppingCartItems$ = this
    //   .basketService
    //   .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

}
