import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  url = environment.baseUrl;
  constructor(private  http: HttpClient) { }
    getall() {
        return this.http.get(this.url + '/notification/getall');
    }



    create(data) {
      console.log(data);
         return this.http.post(this.url + '/notification/create', data);
    }
    delnot(id) {
        return this.http.delete(this.url + '/notification/delete/' + id);
    }

}
