import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-deletenotification',
  templateUrl: './deletenotification.component.html',
  styleUrls: ['./deletenotification.component.scss']
})
export class DeletenotificationComponent implements OnInit {
  id = this.router.snapshot.params['did'];
  constructor(private  router: ActivatedRoute, private  route: Router, private srv: NotificationService) { }

  ngOnInit() {
      this.srv.delnot(this.id).subscribe((delevent: any) => {
          console.log(delevent);
          this.route.navigate(['/notification']);

      });
  }

}
