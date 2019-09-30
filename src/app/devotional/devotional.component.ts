import { Component, OnInit } from '@angular/core';
import { DevotionalService } from './devotional.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-devotional',
  templateUrl: './devotional.component.html',
  styleUrls: ['./devotional.component.scss']
})
export class DevotionalComponent implements OnInit {

  constructor(private devotionalService: DevotionalService) { }

  localdevotionalData: any = '';
  url = environment.baseUrl;

  ngOnInit() {
    this.devotionalService.getall().subscribe((allDevotionals: any) => {
      this.localdevotionalData = allDevotionals;
      console.log(allDevotionals);
    });
  }

}
