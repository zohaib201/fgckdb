import { Component, OnInit } from '@angular/core';
import {EventService} from '../../event/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-createnotification',
  templateUrl: './createnotification.component.html',
  styleUrls: ['./createnotification.component.scss']
})
export class CreatenotificationComponent implements OnInit {

    constructor(private srv: NotificationService,
                private router: Router) { }

    data = {
        title: '',
        description: ''
    };

    onCreate() {

        this.srv.create(this.data).subscribe((data: any) => {
            console.log(data);
             this.router.navigate(['/notification']);

        });
    }

    ngOnInit() {
    }

}
