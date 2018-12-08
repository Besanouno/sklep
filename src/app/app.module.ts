import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {BasketComponent} from './components/basket/basket.component';
import {HeaderComponent} from './components/header/header.component';
import {ProductComponent} from './components/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryProductService} from './service/InMemoryProductService';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {ProductsService} from './service/ProductsService';
import {BasketService} from './service/BasketService';
import {BasketPreviewComponent} from './components/basketPreview/basket.preview.component';


const routes: Routes = [
  {path: '', component: ProductsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    ProductComponent,
    ProductsComponent,
    HeaderComponent,
    BasketPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    ProductsService,
    BasketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
