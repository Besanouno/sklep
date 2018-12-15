import {Product} from './Product';

export class ProductInBasket {
  constructor(product: Product, amount: number) {
    this.product = product;
    this.amount = amount;
  }
  product: Product;
  amount: number;
}
