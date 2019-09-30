import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatepackage',
  templateUrl: './updatepackage.component.html',
  styleUrls: ['./updatepackage.component.scss']
})
export class UpdatepackageComponent implements OnInit {

  constructor(private packageService: PackageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }


  // multiselect
  dropdownList = [];
  selectedItems = [];
  selectedItemsToBeEdited = [];
  dropdownSettings = {};
  arr = [];

  // venue form data
  packageId: any;
  packageData = {
    per: false,
    amo : false,
    name: '',
    actualPrice: '',
    dicountedPrice: '',
    discountRate: '',
    discountAmount: '',
    latitude: 31.413254,
    longitude: 73.091840,
    product: this.selectedItems,
    selectedProduct: this.selectedItemsToBeEdited
  };
  localPackageData: any;
  private packageSub: Subscription;
  private productSub: Subscription;
  private selectedProductSub: Subscription;


  onUpdatePackage() {
    this.packageData.selectedProduct = this.selectedItems;

    this.packageService.Update(this.packageId, this.packageData).subscribe((data: any) => {
      console.log(this.packageData);
      this.localPackageData = data;
      this.router.navigate(['/package']);
    })
  }


   PercentChecker(){
     this.packageData.per = true;
     this.packageData.amo = false;
     document.getElementById('per').removeAttribute('disabled');
     document.getElementById('amo').setAttribute('disabled' , 'disabled');
   }
   AmountChecker(){
    this.packageData.amo = true;
    this.packageData.per = false;
    document.getElementById('amo').removeAttribute('disabled');
    document.getElementById('per').setAttribute('disabled' , 'disabled');
   }

   onItemSelect(item: any) {
    let arr = [];
    arr.push(item);
    this.arr.push(arr[0]);
    this.packageData.product = this.arr;

    console.log(this.packageData.product);
  }

  onItemDeSelect(deselectItem: any) {

    // const index = this.venueData.genre.indexOf(deselectItem.name);
    // this.venueData.genre.splice(index, 1);


    const indx = this.selectedItemsToBeEdited.findIndex(i => i.name === deselectItem.name);
    if (indx !== -1) {
      this.selectedItemsToBeEdited.splice(indx, 1);
      console.log(this.selectedItemsToBeEdited);
      console.log("deleted item is " + deselectItem.name);
      console.log("index of selectedItemsToBeEdited is  " + indx);
    }


    const index = this.packageData.product.findIndex(i => i.name === deselectItem.name);
    if (index !== -1) {
      this.packageData.product.splice(index, 1);
      console.log(this.packageData.product);
      console.log("deleted item is " + deselectItem.name);
      console.log("index of venueData.genre is  " + index);
    }
  }

  onSelectAll(items: any) {
    items.forEach(element => {
      this.packageData.product.push(element);
    });
    //console.log(items);
  }


  ngOnInit() {
    this.packageId = this.activatedRoute.snapshot.params.packageId;

console.log(this.packageId)


    this.packageService.getAllProduct();
    this.productSub = this.packageService.getAllUpdatedProduct().subscribe((products: any) => {
      this.dropdownList = products;
      // console.log(products);
    })

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false,
      maxHeight: 300
    };




    this.packageService.getByid(this.packageId);
    this.packageSub = this.packageService.getUpdatedPackage().subscribe((Package: any) => {
      this.packageData = Package;
      this.packageData.latitude = parseFloat( Package.latitude);
      this.packageData.longitude = parseFloat( Package.longitude);
      // console.log(Package);
    });

    this.packageService.getSelectedProductByPackage(this.packageId);
    this.selectedProductSub = this.packageService.getUpdatedSelectedProductByPackage().subscribe((updatedProduct: any) => {
      this.selectedItems = updatedProduct[0].products;
      this.selectedItemsToBeEdited = updatedProduct[0].products;
      console.log(updatedProduct[0].products);
    });
  }

}
