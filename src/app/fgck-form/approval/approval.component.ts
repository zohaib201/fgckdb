import { Component, OnInit } from '@angular/core';
import { FgckFormService } from '../fgck-form.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

  constructor(private fgckFormService: FgckFormService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  memberId: any;
  localData: any;

  ngOnInit() {

    this.memberId = this.activatedRoute.snapshot.params.member_id;
    this.fgckFormService.approve(this.memberId, null).subscribe((data: any) => {
      this.localData = data;
      this.router.navigate(['/fgck-form']);
    });
    this.fgckFormService.approvef(this.memberId, null).subscribe((data: any) => {
      this.localData = data;
      this.router.navigate(['/fgck-form']);
    });
  }

}
