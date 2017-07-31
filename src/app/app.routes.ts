import { Routes } from '@angular/router';
//import { AuthComponent } from './auth/auth.component';
import { StoreComponent } from './store/store.component';
import { ChatComponent } from './chat/chat.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './products/new-product/new-product.component';


export const AppRoutes: Routes = [
    //{path: 'login', component: AuthComponent},
    {path: '', component: StoreComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/new', component: NewProductComponent},

];