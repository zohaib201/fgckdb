import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.scss']
})
export class CreatesurveyComponent implements OnInit {
  radioplusbtn = [];
  i: number = 0;
  radiobtnlabel: any;

  // member form data
  memberData = {
    statement: '',
    radios: this.radioplusbtn,
  };
  constructor(private srv: SurveyService, private route: Router) { }

  ngOnInit() {
    this.radioplusbtn.forEach(child => {
      this.memberData.radios.push(child);
    });
  }
  decreamentradio(index) {
    this.radioplusbtn.splice(index, 1);
  }
  add() {
    let add;
    add = this.i++;
    this.radioplusbtn.push({ id: add, statement: '' });
  }

  save() {
    this.srv.create(this.memberData).subscribe((data: any) => {
     });
      this.route.navigate(['/survey']);

  }
}
