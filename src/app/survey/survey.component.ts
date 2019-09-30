import { Component, OnInit } from '@angular/core';
import { SurveyService } from './survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  all: any;
  constructor(private srv: SurveyService) { }

  ngOnInit() {
    this.srv.getall().subscribe((data: any) => {
      console.log(data);
      this.all = data;
      console.log(this.all);
    });
  }


}
