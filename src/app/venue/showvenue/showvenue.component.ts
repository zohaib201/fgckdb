import { Component, OnInit } from '@angular/core';
import { VenueService } from '../venue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-showvenue',
  templateUrl: './showvenue.component.html',
  styleUrls: ['./showvenue.component.scss']
})
export class ShowvenueComponent implements OnInit {

  localVenueData: any;
  url = environment.baseUrl;
  venueId: any;
  private venueSub: Subscription;
  venue: any;
  lat: any;
  lng: any;
  constructor(private venueService: VenueService,
    private activatedRoute: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.venueId = this.activatedRoute.snapshot.params['venueId'];
    this.venueService.getByid(this.venueId);
    this.venueSub = this.venueService.getUpdatedVenue().subscribe((venue: any) => {
      this.venue = venue;
      this.lat = parseFloat(this.venue.latitude);
      this.lng = parseFloat(this.venue.longitude);
      console.log(venue);
    });
   }

}
