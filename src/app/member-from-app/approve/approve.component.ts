import { Component, OnInit } from '@angular/core';
import { MemberFromAppService } from '../member-from-app.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss']
})
export class ApproveComponent implements OnInit {

  constructor(private memberFromAppService: MemberFromAppService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  memberFromAppId: any;
  localData: any;

  ngOnInit() {
    this.memberFromAppId = this.activatedRoute.snapshot.params.member_from_app_id;

    this.memberFromAppService.approve(this.memberFromAppId, null).subscribe((data: any) => {
      this.localData = data;
      this.router.navigate(['/member_from_app']);
    })

    }

}
