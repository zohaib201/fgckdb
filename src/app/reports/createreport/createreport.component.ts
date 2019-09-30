import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createreport',
  templateUrl: './createreport.component.html',
  styleUrls: ['./createreport.component.scss']
})
export class CreatereportComponent implements OnInit {
  dropdownSettingsFormMember: {};
  member: any ;
  mid: '';
  data = {date: '' , description: '' ,amount: ''}
   constructor(private reports: ReportService , private route: Router) { }

  ngOnInit() {
     this.reports.getAllApprovedMember().subscribe((member: any) => {
      this.member = member;
    });
  }
  create() {
    this.reports.createreport(this.mid,this.data).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['/report/'])
    })
   }


}
