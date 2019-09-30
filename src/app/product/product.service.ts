import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public url = environment.baseUrl;
  private venueUpdated = new Subject<any>();
  private selectedVenueUpdated = new Subject<any>();
  private productUpdated = new Subject<any>();
  private venue: any[] = [];
  private selectedVenue: any[] = [];
  private product: any;

  constructor(private http: HttpClient) { }

  upLoadImage(data) {
    const fd = new FormData;
    fd.append('image', data);
    return this.http.post(this.url + '/image/saveimage', fd);
  }


  createProduct(productData) {
    console.log(productData);
    return this.http.post(this.url + '/product/create', productData);
  }

  getall() {
    return this.http.get(this.url + '/product/getall');
  }

  getByid(id) {
    return this.http.get(this.url + '/product/get/' + id).subscribe((productData: any) => {
      this.product = productData;
      this.productUpdated.next(productData);
    })
  }




  Update(id, productData) {
    return this.http.post(this.url + '/product/update/' + id, productData);
  }

  getAllVenue() {
    return this.http.get(this.url + '/venue/getall').subscribe((venueData: any) => {
      this.venue = venueData;
      this.venueUpdated.next(venueData);
    });
  }

  getAllUpdatedVenue() {
    return this.venueUpdated.asObservable();
  }

  getUpdatedProduct() {
    return this.productUpdated.asObservable();
  }

  getSelectedVenueByProduct(id) {

    return this.http.get(this.url + '/product/getallselectedvenue/' + id).subscribe((selectedVenueData: any) => {
      this.selectedVenue = selectedVenueData;
      this.selectedVenueUpdated.next(selectedVenueData);

    });
  }

  getUpdatedSelectedVenueByProduct() {
    return this.selectedVenueUpdated.asObservable();
  }
}
