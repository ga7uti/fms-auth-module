import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './_auth/login/login.component';
import {RegisterComponent} from './_auth/register/register.component';
import {UserComponent} from './_auth/user/user.component';
import {AdminComponent} from './_auth/admin/admin.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'user', component: UserComponent},
  {path:'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
