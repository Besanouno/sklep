import {Observable} from 'rxjs/internal/Observable';
import {Injectable, OnInit} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {ProductDraft} from '../model/ProductDraft';

@Injectable()
export class FirebaseProductsService implements OnInit {

  public data: AngularFireList<any[]>;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.data = this.db.list('products');
  }

  public getProducts(): Observable<any[]> {
    return this.db.list('products').valueChanges();
  }

  public saveProduct(draft: ProductDraft) {
    this.data.push([draft]);
  }
}
