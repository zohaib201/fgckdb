import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatevideo',
  templateUrl: './updatevideo.component.html',
  styleUrls: ['./updatevideo.component.scss']
})
export class UpdatevideoComponent implements OnInit {

  constructor(private videoService: VideoService,
    private activatedRoute: ActivatedRoute,
    private router: Router, ) { }

    videoData = {
      imageUrl: '',
      description: '',
      videoUrl: ''
    };

    localVideoData: any;
    imageData;
    videoId;
    private videotSub: Subscription;

    onLoadImage(event) {
      this.imageData = <File>event.target.files[0];
      console.log(this.imageData);
    }

    onUpdateProduct() {
      // this.videoData.selectedVenue = this.selectedItems;
      if (this.imageData === undefined) {
        this.videoService.Update(this.videoId, this.videoData).subscribe((data: any) => {
          this.localVideoData = data;
          this.router.navigate(['/video']);
        })
      } else {
        this.videoService.upLoadImage(this.imageData).subscribe((data: any) => {
          this.videoData.imageUrl = data;
          this.videoService.Update(this.videoId, this.videoData).subscribe((data: any) => {
            this.localVideoData = data;
            this.router.navigate(['/video']);
          })
        })
      }
  
    }

  ngOnInit() {

    this.videoId = this.activatedRoute.snapshot.params.videoId;

    this.videoService.getByid(this.videoId);
    this.videotSub = this.videoService.getUpdatedVideo().subscribe((video: any) => {
      this.videoData = video;
    });
  }

}
