import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  public url = environment.baseUrl;
  private prayer: any;

  constructor(private http: HttpClient) { }

  getall() {
    return this.http.get(this.url + '/prayer/getall');
  }
  approve(id, data) {
    return this.http.post(this.url + '/prayer/approve/' + id, data );
  }

  delprayer(id) {
    return this.http.delete(this.url + '/prayer/delete/' + id);
  }
}
