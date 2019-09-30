import { Component, OnInit } from '@angular/core';
import { VenueService } from './venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {

  constructor(private venueService: VenueService) { }

  localVenueData: any = '';

  ngOnInit() {


    this.venueService.getall().subscribe((allVenue: any) => {
      this.localVenueData = allVenue;

    });
  }
}
