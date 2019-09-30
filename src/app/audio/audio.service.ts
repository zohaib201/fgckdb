import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private http: HttpClient) { }

  public url = environment.baseUrl;
  private audio: any;
  private audioUpdated = new Subject<any>();

  getall() {
    return this.http.get(this.url + '/audio/getall');
  }

  upLoadImage(data) {
    const fd = new FormData;
    fd.append('image', data);
    return this.http.post(this.url + '/image/saveimage', fd);
  }

  createAudio(audioData) {
    console.log(audioData);
    return this.http.post(this.url + '/audio/create', audioData);
  }

  Update(id, audioData) {
    return this.http.post(this.url + '/audio/update/' + id, audioData);
  }

  getByid(id) {
    return this.http.get(this.url + '/audio/get/' + id).subscribe((audioData: any) => {
      this.audio = audioData;
      this.audioUpdated.next(audioData);
    })
  }

  getUpdatedAudio() {
    return this.audioUpdated.asObservable();
  }
  delaudio(id) {
    return this.http.delete(this.url + '/audio/delete/' + id);
  }
}
