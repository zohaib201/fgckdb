import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddeventComponent implements OnInit {

  constructor(private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  eventData = {
    title: '',
    description: '',
    date: ''
  };
  localeventData: any;

  onCreateEvent() {

    this.eventService.createEvent(this.eventData).subscribe((data: any) => {
      console.log(this.eventData);
      this.localeventData = data;
      this.router.navigate(['/event']);

    });
    console.log(this.eventData);
  }

  ngOnInit() {
  }

}
