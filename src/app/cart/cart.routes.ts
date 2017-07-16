import { Routes } from '@angular/router';

import { CartComponent } from './cart.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';

export const CartRoutes: Routes = [
    { path: 'cart', component: CartDetailComponent},
    { path: 'cart/checkout', component: CartCheckoutComponent },
];