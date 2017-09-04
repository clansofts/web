import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignupComponent} from './signup/signup.component'
export const AuthRoutes: Routes = [
    { path: 'login', component: AuthComponent},
    { path: 'signup', component: SignupComponent}
];