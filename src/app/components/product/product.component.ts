import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../model/Product';
import {MongoProductsService} from '../../service/mongo-products.service';
import {BasketService} from '../../service/BasketService';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product;

  @Output() productRemoval = new EventEmitter<Product>();

  constructor(
    private basketService: BasketService) {
  }

  public isProductAvailable(product: Product) {
    return product.amount > 0;
  }

  public isSmallAmountOfProduct(product: Product) {
    return product.amount < 3 && product.amount > 0;
  }

  public removeProduct(): void {
    this.productRemoval.emit(this.product);
  }

  public addToBasket() {
    if (this.product.amount > 0) {
      this.basketService.add(this.product);
    }
  }

  public removeFromBasket() {
    if (this.basketService.itemIsInCart(this.product)) {
      this.basketService.removeOne(this.product);
    }
  }

  public isInBasket(product: Product) {
    return this.basketService.itemIsInCart(product);
  }
}
