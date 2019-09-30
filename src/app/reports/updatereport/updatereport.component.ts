import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatereport',
  templateUrl: './updatereport.component.html',
  styleUrls: ['./updatereport.component.scss']
})
export class UpdatereportComponent implements OnInit {
  member: any ;
  mid: '';
  data = {date: '' , description: '' ,amount: ''}
   constructor(private reports: ReportService , private route: Router , private router: ActivatedRoute) { }

  ngOnInit() {
   this.mid =  this.router.snapshot.params['reportId'];
   this.reports.getsingle(this.mid).subscribe((data: any) => {
     console.log(data);
     this.data.amount = data.amount;
     this.data.description = data.description;
     this.data.date = data.date;
    })
     this.reports.getAllApprovedMember().subscribe((member: any) => {
      this.member = member;
    });
  }
  update() {
    this.reports.update(this.mid,this.data).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['/report/'])
    })
   }

}
