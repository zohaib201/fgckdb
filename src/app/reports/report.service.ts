import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllApprovedMember() {
    return this.http.get(this.url + '/member_from_app/getallapproved');
  }

  createreport(id,data) {
    console.log(id,data);
    return this.http.post(this.url + '/financial/create/'+id, data);
  }

  getallreports() {
     return this.http.get(this.url + '/financial/getall');
  }

  getsingle(id){
    return this.http.get(this.url + '/financial/get/'+id);
  }

  update(id,data){
    return this.http.post(this.url + '/financial/update/'+id, data);
  }
}
