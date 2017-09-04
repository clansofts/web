import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
//import { ProductsDetailsComponent } from './products-details.component';

export const ProductsRoutes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'products', component: ProductsComponent },
    //{ path: 'products/:id', component: ProductsDetailsComponent } 
];