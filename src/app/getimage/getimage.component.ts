import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {FgckFormService} from '../fgck-form/fgck-form.service';

@Component({
  selector: 'app-getimage',
  templateUrl: './getimage.component.html',
  styleUrls: ['./getimage.component.scss']
})
export class GetimageComponent implements OnInit {

  url = environment.baseUrl;
  data = [];
  constructor(private srv: FgckFormService) { }

  ngOnInit() {
    this.srv.gethomephoto().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
  delaudio(id) {
    this.srv.delimg(id).subscribe((data: any) => {
      console.log(data);
    });
    this.srv.gethomephoto().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
}
}
