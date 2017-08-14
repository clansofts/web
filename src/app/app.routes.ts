import { Routes } from '@angular/router';
//import { AuthComponent } from './auth/auth.component';


import { ChatComponent } from './chat/chat.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { OrdersComponent } from './orders/orders.component';


export const AppRoutes: Routes = [
    //{path: 'login', component: AuthComponent},
    {path: '', component: ProductsComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/new', component: NewProductComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'categories/add', component: AddCategoryComponent},

];
