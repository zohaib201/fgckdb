import { Component, OnInit } from '@angular/core';
import {FgckFormService} from '../fgck-form/fgck-form.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homephoto',
  templateUrl: './homephoto.component.html',
  styleUrls: ['./homephoto.component.scss']
})
export class HomephotoComponent implements OnInit {
  data = {pht: '' , description: '', name: ''};
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
      this.srv.homesrvphotoanddescription(this.data).subscribe((data: any) => {
        console.log(data);
        this.route.navigate(['/getincharge']);
      });
    });
  }

}
