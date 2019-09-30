import { Component, OnInit } from '@angular/core';
import { DevotionalService } from '../devotional.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adddevotional',
  templateUrl: './adddevotional.component.html',
  styleUrls: ['./adddevotional.component.scss']
})
export class AdddevotionalComponent implements OnInit {

  constructor(private devotionalService: DevotionalService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  devotionalData = {
    title: '',
    description: '',
    imageUrl: ''
  };
  localDevotionalData: any;
  imageData;

 

  onCreateDevotional() {
    this.devotionalService.upLoadImage(this.imageData).subscribe((imageName: any) => {
      console.log(imageName);
      this.devotionalData.imageUrl = imageName;
      this.devotionalService.createDevotional(this.devotionalData).subscribe((data: any) => {
        console.log(this.devotionalData);
        this.localDevotionalData = data;
        this.router.navigate(['/devotional']);
      })
    });
  }

  onLoadImage(event) {
    this.imageData = <File>event.target.files[0];
    console.log(this.imageData);
  }


  ngOnInit() {
  }

}
