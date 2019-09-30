import { Component, OnInit } from '@angular/core';
import { MemberFromAppService } from './member-from-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-from-app',
  templateUrl: './member-from-app.component.html',
  styleUrls: ['./member-from-app.component.scss']
})
export class MemberFromAppComponent implements OnInit {

  constructor(private memberFromAppService: MemberFromAppService, private router: Router) { }

  localMemberFromAppData: any = '';

  ngOnInit() {

    this.memberFromAppService.getall().subscribe((allMemberFromApp: any) => {
      this.localMemberFromAppData = allMemberFromApp;
    });
  }

  del(id) {
    console.log(id);
    this.memberFromAppService.deletemem(id).subscribe( res => {
      this.router.navigate(['/fgck-form']);
    });
  }
}
