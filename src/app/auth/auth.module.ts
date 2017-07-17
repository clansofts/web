import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
  ],
  declarations: []
})
export class AuthModule { }
