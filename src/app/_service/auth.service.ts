import {Injectable} from '@angular/core';
import {LoginRequest} from '../_model/login-request';
import {HttpClient} from '@angular/common/http';
import {User} from '../_model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:9090/api/auth';
  user: User;

  constructor(private http: HttpClient) {
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(this.authUrl + '/signin', loginRequest);
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(this.authUrl + '/signup', user);
  }

  forgetPassword(email): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    return this.http.post<any>(this.authUrl + '/forgotPassword', formData);
  }

  updatePassword(token, password):Observable<any> {
    const formData = new FormData();
    formData.append('token', token);
    formData.append('password', password);
    return this.http.post<any>(this.authUrl + '/reset', formData);
  }
}
