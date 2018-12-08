import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../model/Product';
import {ProductsService} from '../../service/ProductsService';
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

  public addToBasket(product: Product) {
    if (product.amount > 0) {
      product.amount--;
      this.basketService.add(product);
    }
  }

  public removeFromBasket(product: Product) {
    if (this.basketService.itemIsInCart(product)) {
      product.amount++;
      this.basketService.removeOne(product);
    }
  }

  public isInBasket(product: Product) {
    return this.basketService.itemIsInCart(product);
  }
}
