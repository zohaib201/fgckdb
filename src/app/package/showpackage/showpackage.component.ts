import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-showpackage',
  templateUrl: './showpackage.component.html',
  styleUrls: ['./showpackage.component.scss']
})
export class ShowpackageComponent implements OnInit {

  private packageSub: Subscription;
  packageId: any;
  packageData = {
    id: '',
    per: false,
    amo : false,
    name: '',
    actualPrice: '',
    dicountedPrice: '',
    discountRate: '',
    discountAmount: '',


  };
  localPackageData: any;
  url = environment.baseUrl;

  products = [];

  constructor(private packageService: PackageService,
    private activatedRoute: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
    this.packageId = this.activatedRoute.snapshot.params.packageId;

    this.packageService.getByid(this.packageId);
    this.packageSub = this.packageService.getUpdatedPackage().subscribe((packagee: any) => {
      this.packageData = packagee;
      this.products = packagee.products;

      console.log(packagee);
    });
  }

}
