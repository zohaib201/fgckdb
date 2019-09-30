import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  url = environment.baseUrl;
  constructor(private http: HttpClient) { }
  
  getallquestion() {
        return this.http.get(this.url + '/question/getall');
  }
}
