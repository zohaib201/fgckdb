import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router, private srv: SignupService) {
  }

  localData: any;
  msg: any;
  credentials = {
    userName: '',
    email: '',
    password: ''
  };

  signup() {

    this.srv.signup(this.credentials).subscribe((data: any) => {
      this.localData = data;

      if (this.localData.message === 'Not Authorized') {
        this.msg = 'Invalid Credentials';
        console.log(this.msg);
      } else {
        console.log(data)
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
    if (localStorage.getItem('userId') != null) {
      this.router.navigate(['']);
    }
  }

}