import {Component, OnInit} from '@angular/core';
import {LoginRequest} from '../../_model/login-request';
import {AuthService} from '../../_service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();

  constructor(private authService: AuthService,private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.loginRequest.username.length != 0 && this.loginRequest.password.length != 0) {
      this.authService.login(this.loginRequest);
      this.router.navigate(['/admin']);
    }
  }
}
