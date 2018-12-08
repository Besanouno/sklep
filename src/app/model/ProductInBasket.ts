import {Product} from './Product';

export class ProductInBasket {
  constructor(product: Product) {
    this.product = product;
    this.amount = 1;
  }
  product: Product;
  amount: number;
}
