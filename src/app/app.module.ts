import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { ProductsComponent } from './products/products.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SizePipe } from './size.pipe';
import { GenderPipe } from './gender.pipe';
import { ColorPipe } from './color.pipe';
import { PricePipe } from './price.pipe';
import { ClothingPipe } from './clothing.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddedToBagComponent } from './added-to-bag/added-to-bag.component';
import { AuthenticationComponent } from './authentication/authentication.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    ProductsComponent,
    SizePipe,
    GenderPipe,
    ColorPipe,
    PricePipe,
    ClothingPipe,
    ProductDetailComponent,
    AddedToBagComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, 'capstone-project'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
