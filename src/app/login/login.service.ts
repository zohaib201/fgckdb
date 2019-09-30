import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url  = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  login(logindata) {
    return this.http.post(this.url + '/user/signin' , logindata);
}
}
