import {Injectable} from '@angular/core';
import {LoginRequest} from '../_model/login-request';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:9090/api/auth';
  user: any;

  constructor(private http: HttpClient) {
  }

   login(loginRequest: LoginRequest): any {
    this.http.post<any>(this.authUrl + '/signin', loginRequest).subscribe((m) => {
      this.user = m;
      console.log(this.user)
    });

    return this.user;
  }
}
