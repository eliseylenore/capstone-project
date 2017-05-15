import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ProductComponent

  },
  {
    path: '/about',
    component: AboutComponent

  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
