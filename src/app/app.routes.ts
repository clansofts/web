import { Routes } from '@angular/router';
//import { AuthComponent } from './auth/auth.component';
import { StoreComponent } from './store/store.component';
import { ChatComponent } from './chat/chat.component';
import { MusicComponent } from './music/music.component';

export const AppRoutes: Routes = [
    //{path: 'login', component: AuthComponent},
    {path: '', component: StoreComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'music', component: MusicComponent}
];