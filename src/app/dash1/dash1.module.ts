import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SighupComponent } from './sighup/sighup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { Dash1RoutingModule } from './dash1-routing.module';
import { Dash1Component } from './dash1.component';
 


@NgModule({
  declarations: [
    
    SighupComponent,
    ForgetpasswordComponent,
    LoginComponent,
    Dash1Component
  ],
  imports: [
    CommonModule,
    Dash1RoutingModule
  ]
})
export class Dash1Module { }
