import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SighupComponent } from './sighup/sighup.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

const routes:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SighupComponent
  },
  {
    path:"forgetpassword",
    component:ForgetpasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Dash1RoutingModule { }
 