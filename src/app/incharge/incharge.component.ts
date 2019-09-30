import { Component, OnInit } from '@angular/core';
import {FgckFormService} from '../fgck-form/fgck-form.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-incharge',
  templateUrl: './incharge.component.html',
  styleUrls: ['./incharge.component.scss']
})
export class InchargeComponent implements OnInit {

  data = {pht: ''};
  imageData: any;
  constructor(private  srv: FgckFormService , private  route: Router) { }

  ngOnInit() {
  }

  onLoadImage(event) {
    this.imageData = <File>event.target.files[0];
    console.log(this.imageData);
  }

  add() {
    console.log(this.data);
    this.srv.upLoadImage(this.imageData).subscribe((imageName: any) => {
      console.log(imageName);
      this.data.pht = imageName;
      this.srv.homephoto(this.data).subscribe((data: any) => {
        console.log(data);
        this.route.navigate(['/getimage']);
      });
    });
  }

}
