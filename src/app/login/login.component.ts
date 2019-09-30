import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {LoginService} from '../../app/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../vendor/styles/pages/authentication.scss']
})
export class LoginComponent implements OnInit {
  constructor(private appService: AppService,
      private loginService: LoginService,
      private router: Router) {
    this.appService.pageTitle = 'Login v3 - Pages';
  }

  localData: any;
  msg: any;
  credentials = {
    email: '',
    password: '',
    rememberMe: false
  };

  login() {

    this.loginService.login(this.credentials).subscribe((data: any) => {
         this.localData = data;

         if (this.localData.message === 'Not Authorized') {
                this.msg = 'Invalid Credentials';
                 console.log(this.msg);
            } else {

                localStorage.setItem( 'userId' , data.userId);
                localStorage.setItem( 'token'   , data.token);
                 console.log(data)
                this.router.navigate(['']);
            }
    }) ;
}

  ngOnInit() {
    if (localStorage.getItem('userId') != null) {
      this.router.navigate(['']);
  }

  }

}
