import { Component, OnInit } from '@angular/core';
import { PrayerService } from './prayer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.scss']
})
export class PrayerComponent implements OnInit {

  constructor(private prayerService: PrayerService, public router: Router) { }

  localPrayerData: any = '';

  ngOnInit() {
    this.prayerService.getall().subscribe((allPrayer: any) => {
      this.localPrayerData = allPrayer;
      console.log(allPrayer);
    });
  }

  delprayer(id) {
    console.log(id + ' this is the prayer id');
    this.prayerService.delprayer(id).subscribe(res => {
      console.log('prayer deleted successfuly');
    });

    this.prayerService.getall().subscribe((allPrayer: any) => {
      this.localPrayerData = allPrayer;
      console.log(allPrayer);
    });
}

}
