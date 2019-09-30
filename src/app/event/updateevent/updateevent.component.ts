import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.scss']
})
export class UpdateeventComponent implements OnInit {

  constructor(private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router, ) { }

  eventData = {
    title: '',
    description: ''
  };

  localEventData: any;
  eventId;
  private eventSub: Subscription;

  onUpdateevent() {
    this.eventService.Update(this.eventId, this.eventData).subscribe((data: any) => {
      this.localEventData = data;

      this.router.navigate(['/event']);
    })

  }

  ngOnInit() {
    this.eventId = this.activatedRoute.snapshot.params.eventId;

    this.eventService.getByid(this.eventId);
    this.eventSub = this.eventService.getUpdatedevent().subscribe((event: any) => {
      this.eventData = event;
    });
  }

}
