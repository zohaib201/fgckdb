import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(private eventService: EventService) { }

  localeventData: any = '';
  url = environment.baseUrl;

  ngOnInit() {
    this.eventService.getall().subscribe((allEvents: any) => {
      this.localeventData = allEvents;
      console.log(allEvents);
    });
  }


}
