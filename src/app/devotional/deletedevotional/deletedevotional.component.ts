import { Component, OnInit } from '@angular/core';
import {EventService} from '../../event/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DevotionalService} from '../devotional.service';
import {NotificationService} from '../../notification/notification.service';

@Component({
  selector: 'app-deletedevotional',
  templateUrl: './deletedevotional.component.html',
  styleUrls: ['./deletedevotional.component.scss']
})
export class DeletedevotionalComponent implements OnInit {

    id = this.router.snapshot.params['did'];
    constructor(private  router: ActivatedRoute, private  route: Router, private srv: DevotionalService) { }

    ngOnInit() {
        this.srv.deldevotional(this.id).subscribe((delevent: any) => {
            console.log(delevent);
            this.route.navigate(['/devotional']);
        });
    }
}
