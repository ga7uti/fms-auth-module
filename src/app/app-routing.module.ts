import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {UserComponent} from './auth/user/user.component';
import {AdminComponent} from './auth/admin/admin.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {UpdatePasswordComponent} from './auth/update-password/update-password.component';
import {AuthGuard} from './_helpers/auth.guard';
import {Role} from './_model/role.enum';


const routes: Routes = [
  {path: '', pathMatch:'full',redirectTo:"/login"},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard],data: { roles: [Role.User]}},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]}},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'update-password', component: UpdatePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
