import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './modules/products/presentation/product.component';
import { productRoutes } from './modules/products/presentation/product.routes';

export const routes: Routes = [
  { path: '', component: ProductComponent, children: productRoutes },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
