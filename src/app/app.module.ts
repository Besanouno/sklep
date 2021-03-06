import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {BasketComponent} from './components/basket/basket.component';
import {HeaderComponent} from './components/header/header.component';
import {ProductComponent} from './components/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {MongoProductsService} from './service/mongo-products.service';
import {BasketService} from './service/BasketService';
import {BasketPreviewComponent} from './components/basketPreview/basket.preview.component';
import {NewProductComponent} from './components/newProduct/new.product.component';
import {MenuComponent} from './components/menu/menu.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {AuthGuard} from './firebase/auth.guard';
import {OrderComponent} from './components/order/order.component';
import {FirebaseProductsService} from './service/firebase-products.service';
import {environment} from '../environments/environment';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FirebaseUsersService} from './service/firebase-users.service';
import {AlertService} from './alerts/_services/alert.service';
import {AlertComponent} from './alerts/_directives/alert.component';
import {ReversedAuthGuard} from "./firebase/reversed.auth.guard";

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'new', component: NewProductComponent},
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ReversedAuthGuard]
  },
  {path: 'register', component: RegistrationComponent}
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
    MenuComponent,
    OrderComponent,
    LoginComponent,
    RegistrationComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MongoProductsService,
    FirebaseProductsService,
    FirebaseUsersService,
    BasketService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
