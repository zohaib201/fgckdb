import { Component, OnInit } from '@angular/core';
import { PackageService } from './package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

  constructor(private packageService: PackageService) { }
  localPackageData: any = '';

  ngOnInit() {
    this.packageService.getall().subscribe((allPackage: any) => {
      this.localPackageData = allPackage;
    });
  }

}
