import { Routes } from '@angular/router';
import { HomeProductComponent } from './pages/home-product/home-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

export const productRoutes: Routes = [
  {
    path: '',
    component: HomeProductComponent,
  },
  {
    path: 'update-product/:id',
    component: UpdateProductComponent,
  },
  {
    path: 'create-product',
    component: CreateProductComponent,
  },
];
