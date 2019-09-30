import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevotionalService {

  constructor(private http: HttpClient) { }

  public url = environment.baseUrl;
  private devotional: any;
  private devotionalUpdated = new Subject<any>();

  getall() {
    return this.http.get(this.url + '/devotional/getall');
  }

  upLoadImage(data) {
    const fd = new FormData;
    fd.append('image', data);
    return this.http.post(this.url + '/image/saveimage', fd);
  }



  createDevotional(devotionalData) {
    console.log(devotionalData);
    return this.http.post(this.url + '/devotional/create', devotionalData);
  }

  Update(id, devotionalData) {
    return this.http.post(this.url + '/devotional/update/' + id, devotionalData);
  }

  getByid(id) {
    return this.http.get(this.url + '/devotional/get/' + id).subscribe((devotionalData: any) => {
      this.devotional = devotionalData;
      this.devotionalUpdated.next(devotionalData);
    })
  }

    deldevotional(id) {
        return this.http.delete(this.url + '/devotional/delete/' + id);
    }

  getUpdatedDevotional() {
    return this.devotionalUpdated.asObservable();
  }
}
