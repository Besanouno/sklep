import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {MongoProductsService} from '../../service/mongo-products.service';
import {BasketService} from '../../service/BasketService';
import {FirebaseProductsService} from '../../service/firebase-products.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [FirebaseProductsService]
})
export class ProductsComponent implements OnInit {

  private products: Product[];

  constructor(
    private productsService: FirebaseProductsService) {
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
      data => {
        console.log('elo');
        console.log(data);
        this.products = data;
      }
    );
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
