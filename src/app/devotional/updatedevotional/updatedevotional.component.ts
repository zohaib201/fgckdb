import { Component, OnInit } from '@angular/core';
import { DevotionalService } from '../devotional.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatedevotional',
  templateUrl: './updatedevotional.component.html',
  styleUrls: ['./updatedevotional.component.scss']
})
export class UpdatedevotionalComponent implements OnInit {

  constructor(private devotionalService: DevotionalService,
    private activatedRoute: ActivatedRoute,
    private router: Router, ) { }

  devotionalData = {
    title: '',
    imageUrl: '',
    description: ''
  };

  localDevotionalData: any;
  devotionalId;
  imageData;

  private devotionalSub: Subscription;

  onLoadImage(event) {
    this.imageData = <File>event.target.files[0];
    console.log(this.imageData);
  }

 

  onUpdateDevotional() {

    if (this.imageData === undefined) {
      this.devotionalService.Update(this.devotionalId, this.devotionalData).subscribe((data: any) => {
        this.localDevotionalData = data;
        this.router.navigate(['/devotional']);
      })
    } else {
      this.devotionalService.upLoadImage(this.imageData).subscribe((data: any) => {
        this.devotionalData.imageUrl = data;
        this.devotionalService.Update(this.devotionalId, this.devotionalData).subscribe((data: any) => {
          this.localDevotionalData = data;
          this.router.navigate(['/devotional']);
        })
      })
    }

  }


  ngOnInit() {
    this.devotionalId = this.activatedRoute.snapshot.params.devotionalId;

    this.devotionalService.getByid(this.devotionalId);
    this.devotionalSub = this.devotionalService.getUpdatedDevotional().subscribe((devotional: any) => {
      this.devotionalData = devotional;
    });
  }


}
