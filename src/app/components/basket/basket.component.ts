import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {BasketService} from '../../service/BasketService';
import {ProductInBasket} from '../../model/ProductInBasket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  private totalPrice: string;
  private products: ProductInBasket[];

  constructor(
    private basketService: BasketService,
    private _location: Location) {}

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    this.basketService.getItems().subscribe(
      data => {
        this.products = data.reduce((products, item) => {
          const productInBasket = products.find(_ => _.product.id === item.id);
          if (productInBasket != null) {
            productInBasket.amount++;
          } else {
            products.push(new ProductInBasket(item, 1));
          }
          return products;
        }, []);
        console.log(this.products);
      }
    );
    this.basketService.getTotalPrice().subscribe(
      data => this.totalPrice = data.toFixed(2)
    );
  }

}
