import { Component, OnInit } from '@angular/core';
import {EventService} from '../event/event.service';
import {NotificationService} from './notification.service';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

    constructor(private srv: NotificationService, private router: Router) { }

    data: any;
    url = environment.baseUrl;

    ngOnInit() {
        this.srv.getall().subscribe((data: any) => {
            this.data = data;
         });
    }


}
