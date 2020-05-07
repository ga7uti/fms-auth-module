import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {UserComponent} from './auth/user/user.component';
import {AdminComponent} from './auth/admin/admin.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {UpdatePasswordComponent} from './auth/update-password/update-password.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'user', component: UserComponent},
  {path:'admin', component: AdminComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'update-password', component: UpdatePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
