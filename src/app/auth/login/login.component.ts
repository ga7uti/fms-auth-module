import {Component, OnInit} from '@angular/core';
import {LoginRequest} from '../../_model/login-request';
import {AuthService} from '../../_service/auth.service';
import {Router} from '@angular/router';
import {ErrorResponse} from '../../_model/error-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();
  response: ErrorResponse = new ErrorResponse();

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.loginRequest.username.length != 0 && this.loginRequest.password.length != 0) {
      this.authService.login(this.loginRequest).subscribe(value => {
        if (value.status) {
          //Todo: save to local properties and use auth-guard
          this.router.navigate(['/admin']);
        } else {
          this.response = {status: true, message: value.message};
        }
      });
    }
  }
}
