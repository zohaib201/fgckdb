import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  public url = environment.baseUrl;   // venue = product
  private productUpdated = new Subject<any>();    //  product = package
  private selectedProductUpdated = new Subject<any>();
  private packageUpdated = new Subject<any>();
  private product: any[] = [];
  private selectedProduct: any[] = [];
  private package: any;

  constructor(private http: HttpClient) { }

  createPackage(packagetData) {
    console.log(packagetData);
    return this.http.post(this.url + '/package/create', packagetData);
  }

  getall() {
    return this.http.get(this.url + '/package/getall');
  }

  getByid(id) {
    return this.http.get(this.url + '/package/get/' + id).subscribe((packagetData: any) => {
      this.package = packagetData;
      this.packageUpdated.next(packagetData);
    })
  }




  Update(id, packagetData) {
    return this.http.post(this.url + '/package/update/' + id, packagetData);
  }

  getAllProduct() {
    return this.http.get(this.url + '/product/getall').subscribe((productData: any) => {
      this.product = productData;
      this.productUpdated.next(productData);
    });
  }

  getAllUpdatedProduct() {
    return this.productUpdated.asObservable();
  }

  getUpdatedPackage() {
    return this.packageUpdated.asObservable();
  }

  getSelectedProductByPackage(id) {

    return this.http.get(this.url + '/package/getallselectedproduct/' + id).subscribe((selectedProductData: any) => {
      this.selectedProduct = selectedProductData;
      this.selectedProductUpdated.next(selectedProductData);

    });
  }

  getUpdatedSelectedProductByPackage() {
    return this.selectedProductUpdated.asObservable();
  }

}
