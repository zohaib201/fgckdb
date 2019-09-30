import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router, ) { }


  // multiselect
  imageData;
  dropdownList = [];
  selectedItems = [];
  selectedItemsToBeEdited = [];
  dropdownSettings = {};
  arr = [];

  // venue form data
  productId: any;
  productData = {
    name: '',
    price: '',
    quantity: '',
    type: '',
    imageUrl: '',
    video: '',
    status: '',
    venue: this.selectedItems,
    selectedVenue: this.selectedItemsToBeEdited
  };
  localProductData: any;
  private venueSub: Subscription;
  private productSub: Subscription;
  private selectedVenueSub: Subscription;




  onLoadImage(event) {
    this.imageData = <File>event.target.files[0];
    console.log(this.imageData);
  }



  onUpdateProduct() {
    this.productData.selectedVenue = this.selectedItems;
    if (this.imageData === undefined) {
      this.productService.Update(this.productId, this.productData).subscribe((data: any) => {
        this.localProductData = data;
        this.router.navigate(['/product']);
      })
    } else {
      this.productService.upLoadImage(this.imageData).subscribe((data: any) => {
        this.productData.imageUrl = data;
        this.productService.Update(this.productId, this.productData).subscribe((data: any) => {
          this.localProductData = data;
          this.router.navigate(['/product']);
        })
      })
    }

  }

  onItemSelect(item: any) {



    let arr = [];
    arr.push(item);
    this.arr.push(arr[0]);
    this.productData.venue = this.arr;

    console.log(this.productData.venue);
  }

  onItemDeSelect(deselectItem: any) {

    const indx = this.selectedItemsToBeEdited.findIndex(i => i.name === deselectItem.name);
    if (indx !== -1) {
      this.selectedItemsToBeEdited.splice(indx, 1);
      console.log(this.selectedItemsToBeEdited);
      console.log("deleted item is " + deselectItem.name);
      console.log("index of selectedItemsToBeEdited is  " + indx);
    }


    const index = this.productData.venue.findIndex(i => i.name === deselectItem.name);
    if (index !== -1) {
      this.productData.venue.splice(index, 1);
      console.log(this.productData.venue);
      console.log("deleted item is " + deselectItem.name);
      console.log("index of venueData.genre is  " + index);
    }
  }

  onSelectAll(items: any) {
    items.forEach(element => {
      this.productData.venue.push(element);
    });
    //console.log(items);
  }



  ngOnInit() {



    this.productId = this.activatedRoute.snapshot.params.productId;

    this.productService.getAllVenue();
    this.venueSub = this.productService.getAllUpdatedVenue().subscribe((venues: any) => {
      this.dropdownList = venues;
    });


    this.productService.getByid(this.productId);
    this.productSub = this.productService.getUpdatedProduct().subscribe((product: any) => {
      this.productData = product;
    });

    this.productService.getSelectedVenueByProduct(this.productId);
    this.selectedVenueSub = this.productService.getUpdatedSelectedVenueByProduct().subscribe((updatedVenue: any) => {
      let venueArray = [];
      venueArray.push(updatedVenue.venue);
      this.selectedItems = venueArray;
      this.selectedItemsToBeEdited = venueArray;
      //console.log(venueArray);
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
