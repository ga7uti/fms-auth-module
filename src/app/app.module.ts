import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RegisterComponent} from './auth/register/register.component';
import {UserComponent} from './auth/user/user.component';
import {AdminComponent} from './auth/admin/admin.component';
import {UpdatePasswordComponent} from './auth/update-password/update-password.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {AuthGuard} from './_helpers/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AdminComponent,
    UpdatePasswordComponent,
    ForgotPasswordComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
