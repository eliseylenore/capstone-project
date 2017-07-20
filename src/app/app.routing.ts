import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import {ProductDetailComponent } from './product-detail/product-detail.component';
import {AuthenticationComponent} from './authentication/authentication.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
