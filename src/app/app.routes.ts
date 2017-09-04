import { Routes, RouterModule  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthComponent } from './auth/auth.component';


import { ChatComponent } from './chat/chat.component';
//import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { OrdersComponent } from './orders/orders.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

import { AuthRoutes } from './auth/auth.routes';
import { ProductsRoutes } from './products/products.routes'


export const AppRoutes: Routes = [
/*     {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }, */
    ...AuthRoutes,
    ...ProductsRoutes,
    { path: '**', component: PageNotFoundComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
