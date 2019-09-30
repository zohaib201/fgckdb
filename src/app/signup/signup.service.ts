import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url  = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http.post(this.url + '/user/signup' , data);
}}
