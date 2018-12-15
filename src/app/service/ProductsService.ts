import {Product} from '../model/Product';
import {HttpClient} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class ProductsService {

  private products: Product[];

  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
    this.getProducts().subscribe(
      data => { this.products =  data; }
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
