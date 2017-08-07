import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import {ProductDetailComponent } from './product-detail/product-detail.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {StripeFormComponent} from './stripe-form/stripe-form.component';
import {CustomFormComponent} from './custom-form/custom-form.component';
import {SearchComponent} from './search/search.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'authentication',
    component: AuthenticationComponent
  },
  {
    path: 'stripe/:id',
    component: StripeFormComponent
  },
  {
    path: 'custom-form',
    component: CustomFormComponent
  },
  {
    path: 'search/:search',
    component: SearchComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
