import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {ProductsService} from '../../service/ProductsService';
import {BasketService} from '../../service/BasketService';

@Component({
  selector: 'app-products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  private products: Product[];

  constructor(
    private productsService: ProductsService,
    private basketService: BasketService) {
  }

  public isCheapest(product: Product) {
    return product.price === this.products.reduce(function(prev, current) { return (prev.price < current.price) ? prev : current; }).price;
  }

  public isMostExpensive(product: Product) {
    return product.price === this.products.reduce(function(prev, current) { return (prev.price > current.price) ? prev : current; }).price;
  }

  public removeProductFromList(event) {
    const index = this.products.indexOf(event);
    this.products.splice(index, 1);
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      data => this.products = data
    );
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
