import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { ProductsComponent } from './products/products.component';
import { masterFirebaseConfig } from './api-keys';
import * as firebase from "firebase";
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
import { StripeFormComponent } from './stripe-form/stripe-form.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { SearchComponent } from './search/search.component';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  projectId: masterFirebaseConfig.projectId,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

firebase.initializeApp(firebaseConfig);

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
    AuthenticationComponent,
    StripeFormComponent,
    CustomFormComponent,
    EditItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
