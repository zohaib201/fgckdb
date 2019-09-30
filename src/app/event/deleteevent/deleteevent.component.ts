import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../notification/notification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../event.service';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.scss']
})
export class DeleteeventComponent implements OnInit {

    id = this.router.snapshot.params['did'];
    constructor(private  router: ActivatedRoute, private  route: Router, private srv: EventService) { }

  ngOnInit() {
      this.srv.delevent(this.id).subscribe((delevent: any) => {
          console.log(delevent);
          this.route.navigate(['/event']);
      });
  }

}
