import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.scss']
})
export class AddvideoComponent implements OnInit {

  constructor(private videoService: VideoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    videoData = {
      imageUrl: '',
      description: '',
      videoUrl: ''
    };
    localVideoData: any;
    imageData;
  
    onCreateVideo() {
      this.videoService.upLoadImage(this.imageData).subscribe((imageName: any) => {
        console.log(imageName);
        this.videoData.imageUrl = imageName;
        this.videoService.createProduct(this.videoData).subscribe((data: any) => {
          console.log(this.videoData);
          this.localVideoData = data;
          this.router.navigate(['/video']);
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
