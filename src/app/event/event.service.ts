import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public url = environment.baseUrl;
  private event: any;
  private eventUpdated = new Subject<any>();

  getall() {
    return this.http.get(this.url + '/event/getall');
  }



  createEvent(eventData) {
    console.log(eventData);
    return this.http.post(this.url + '/event/create', eventData);
  }

  Update(id, eventData) {
    return this.http.post(this.url + '/event/update/' + id, eventData);
  }

  getByid(id) {
    return this.http.get(this.url + '/event/get/' + id).subscribe((eventData: any) => {
      this.event = eventData;
      this.eventUpdated.next(eventData);
    })
  }

  getUpdatedevent() {
    return this.eventUpdated.asObservable();
  }

    delevent(id) {
        return this.http.delete(this.url + '/event/delete/' + id);
    }
}
