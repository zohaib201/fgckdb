import { Component, OnInit } from '@angular/core';
import { FgckFormService } from '../fgck-form.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unapprove',
  templateUrl: './unapprove.component.html',
  styleUrls: ['./unapprove.component.scss']
})
export class UnapproveComponent implements OnInit {

   constructor(private fgckFormService: FgckFormService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  memberId: any;
  localData: any;

  ngOnInit() {

    this.memberId = this.activatedRoute.snapshot.params.member_id;
    this.fgckFormService.onBlock(this.memberId, null).subscribe((data: any) => {
      this.localData = data;
      this.router.navigate(['/fgck-form']);
    });
    this.fgckFormService.onBlockf(this.memberId, null).subscribe((data: any) => {
      this.localData = data;
      this.router.navigate(['/fgck-form']);
    });
  }

}
