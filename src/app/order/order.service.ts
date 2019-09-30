import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public url = environment.baseUrl;
  private order: any[] = [];
  private orderById: any;
  private orderByIdUpdated = new Subject<any>();
  private orderUpdated = new Subject<any>();

  constructor(private http: HttpClient) { }


  getAllOrder() {
    return this.http.get(this.url + '/order/getall').subscribe((orderData: any) => {
      this.order = orderData;
      this.orderUpdated.next(orderData);
    });
  }

  getAllUpdatedOrder() {
    return this.orderUpdated.asObservable();
  }

  getByid(id) {
    return this.http.get(this.url + '/order/get/' + id).subscribe((orderData: any) => {
      this.orderById = orderData;
      this.orderByIdUpdated.next(orderData);
    })
  }

  getUpdatedOrder() {
    return this.orderByIdUpdated.asObservable();
  }



}
