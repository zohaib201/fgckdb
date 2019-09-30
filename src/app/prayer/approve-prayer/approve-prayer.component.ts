import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../prayer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-approve-prayer',
  templateUrl: './approve-prayer.component.html',
  styleUrls: ['./approve-prayer.component.scss']
})
export class ApprovePrayerComponent implements OnInit {

  constructor(private prayerService: PrayerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  prayerId: any;
  localData: any;

  ngOnInit() {

    this.prayerId = this.activatedRoute.snapshot.params.prayer_id;
    this.prayerService.approve(this.prayerId, null).subscribe((data: any) => {
      this.localData = data;
      this.router.navigate(['/prayer']);
    });
  }

}
