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
import {ProductsService} from './service/ProductsService';
import {BasketService} from './service/BasketService';
import {BasketPreviewComponent} from './components/basketPreview/basket.preview.component';
import {NewProductComponent} from './components/newProduct/new.product.component';
import {MenuComponent} from './components/menu/menu.component';


const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'new', component: NewProductComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    ProductComponent,
    ProductsComponent,
    HeaderComponent,
    BasketPreviewComponent,
    NewProductComponent,
    MenuComponent
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
