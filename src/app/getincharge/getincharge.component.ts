import { Component, OnInit } from '@angular/core';
import {FgckFormService} from '../fgck-form/fgck-form.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-getincharge',
  templateUrl: './getincharge.component.html',
  styleUrls: ['./getincharge.component.scss']
})
export class GetinchargeComponent implements OnInit {
  url = environment.baseUrl;
  data = [];
  constructor(private srv: FgckFormService) { }

  ngOnInit() {
    this.srv.getincharge().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
  delaudio(id) {
    this.srv.delncharge(id).subscribe((data: any) => {
      console.log(data);
    });
    this.srv.getincharge().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
}

}
