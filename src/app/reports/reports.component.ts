import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(private srv: ReportService) { }
all: any;
  ngOnInit() {
  this.all =   this.srv.getallreports().subscribe((data: any) => {
    console.log(data);
    this.all =data;
  })
   }
}
