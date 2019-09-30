import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  public url = environment.baseUrl;
  private genreUpdated = new Subject<any>();
  private selectedGenreUpdated = new Subject<any>();
  private venueUpdated = new Subject<any>();
  private genre: any[] = [];
  private selectedGenre: any[] = [];
  private venue: any;

  constructor(private http: HttpClient) { }

  upLoadImage(data) {
    const fd = new FormData;
    fd.append('image', data);
    return this.http.post(this.url + '/image/saveimage', fd);
  }

  createVenue(venuedata) {
    return this.http.post(this.url + '/venue/create', venuedata);
  }

  getall() {
    return this.http.get(this.url + '/venue/getall');
  }

  getByid(id) {
    return this.http.get(this.url + '/venue/get/' + id).subscribe((venueData: any) => {
      this.venue = venueData;
      this.venueUpdated.next(venueData);
    })
  }

  // getByid(id) {
  //     return this.http.get(this.url + '/venue/get/' + id);
  // }


  Update(id, venuedata) {
    return this.http.post(this.url + '/venue/update/' + id, venuedata);
  }

  getAllGenre() {
    return this.http.get(this.url + '/genre/getall').subscribe((genreData: any) => {
      this.genre = genreData;
      this.genreUpdated.next(genreData);
    });
  }

  getAllUpdatedGenre() {
    return this.genreUpdated.asObservable();
  }

  getUpdatedVenue() {
    return this.venueUpdated.asObservable();
  }

  getSelectedGenreByVenue(id) {

    return this.http.get(this.url + '/venue/getallselectedgenre/' + id).subscribe((selectedGenreData: any) => {
      this.selectedGenre = selectedGenreData;
      this.selectedGenreUpdated.next(selectedGenreData);

    });
  }

  getUpdatedSelectedGenreByVenue() {
    return this.selectedGenreUpdated.asObservable();
  }


}
