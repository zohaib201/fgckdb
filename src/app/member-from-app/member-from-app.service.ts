import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberFromAppService {

  public url = environment.baseUrl;
  private memberFromApp: any;

  constructor(private http: HttpClient) { }


  getall() {
    return this.http.get(this.url + '/member_from_app/getall');
  }

  approve(id, data) {
    return this.http.post(this.url + '/member_from_app/approve/' + id, data );
  }

  // delete(id) {
  //   return this.http.post(this.url + '/member_from_app/approve/' + id, );
  // }
  deletemem(id) {
    return this.http.delete(this.url + '/member_from_app/delete/' + id);
}

}
