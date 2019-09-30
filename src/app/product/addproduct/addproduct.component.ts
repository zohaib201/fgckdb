import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }


  // multiselect
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  imageData;

  // venue form data

  productData = {
    name: '',
    price: '',
    quantity: '',
    type: '',
    imageUrl: '',
    video: '',
    status,
    venue: this.selectedItems
  };
  localProductData: any;

  private venueSub: Subscription;









  onCreateProduct() {
    this.productService.upLoadImage(this.imageData).subscribe((imageName: any) => {
      console.log(imageName);
      this.productData.imageUrl = imageName;
      this.productService.createProduct(this.productData).subscribe((data: any) => {
        console.log(this.productData);
        this.localProductData = data;
        this.router.navigate(['/product']);
      })
    });
  }

  onItemSelect(item: any) {

    this.productData.venue.push(item);
    // console.log(this.productData.venue);
  }

  onItemDeSelect(deselectItem: any) {

    const index = this.productData.venue.indexOf(deselectItem.name);
    this.productData.venue.splice(index, 1);
    //console.log(deselectItem.name);
  }

  onSelectAll(items: any) {
    items.forEach(element => {
      this.productData.venue.push(element);
    });
    //console.log(items);
  }

  onLoadImage(event) {
    this.imageData = <File>event.target.files[0];
    console.log(this.imageData);
  }

  ngOnInit() {



    this.productService.getAllVenue();
    this.venueSub = this.productService.getAllUpdatedVenue().subscribe((venues: any) => {
      this.dropdownList = venues;
    });





    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false,
      maxHeight: 300
    };

  }

}
