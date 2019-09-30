import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.scss']
})
export class AddpackageComponent implements OnInit {

  constructor(private pacageService: PackageService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  // multiselect
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  // package form data

  packageData = {
    per: false,
    amo : false,
    name: '',
    actualPrice: '',
    dicountedPrice: '',
    discountRate: '',
    discountAmount: '',
    product: this.selectedItems,
  };
  localPackageData: any;


  private packageSub: Subscription;

  onCreatePackage() {

    this.pacageService.createPackage(this.packageData).subscribe((data: any) => {
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

    this.packageData.product.push(item);
    // console.log(this.productData.venue);
  }

  onItemDeSelect(deselectItem: any) {

    const index = this.packageData.product.indexOf(deselectItem.name);
    this.packageData.product.splice(index, 1);
    //console.log(deselectItem.name);
  }

  onSelectAll(items: any) {
    items.forEach(element => {
      this.packageData.product.push(element);
    });
    //console.log(items);
  }


  ngOnInit() {

    this.pacageService.getAllProduct();
    this.packageSub = this.pacageService.getAllUpdatedProduct().subscribe((products: any) => {
      this.dropdownList = products;

    });





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

  }

}
