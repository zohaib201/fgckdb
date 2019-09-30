import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  public url = environment.baseUrl;
  private video: any;
  private videoUpdated = new Subject<any>();

  getall() {
    return this.http.get(this.url + '/video/getall');
  }

  upLoadImage(data) {
    const fd = new FormData;
    fd.append('image', data);
    return this.http.post(this.url + '/image/saveimage', fd);
  }

  createProduct(videoData) {
    console.log(videoData);
    return this.http.post(this.url + '/video/create', videoData);
  }

  Update(id, videoData) {
    return this.http.post(this.url + '/video/update/' + id, videoData);
  }

  getByid(id) {
    return this.http.get(this.url + '/video/get/' + id).subscribe((videoData: any) => {
      this.video = videoData;
      this.videoUpdated.next(videoData);
    })
  }

  getUpdatedVideo() {
    return this.videoUpdated.asObservable();
  }

  delvideo(id) {
    return this.http.delete(this.url + '/video/delete/' + id);
  }
}
