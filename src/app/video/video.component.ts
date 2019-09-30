import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  localvideoData: any = '';
  url = environment.baseUrl;

  ngOnInit() {
    this.videoService.getall().subscribe((allVideos: any) => {
      this.localvideoData = allVideos;
      console.log(allVideos);
    });
  }
  delvideo(id) {
    console.log(id + ' this is the prayer id');
    this.videoService.delvideo(id).subscribe(res => {
      console.log('prayer deleted successfuly');
    });

    this.videoService.getall().subscribe((allVideos: any) => {
      this.localvideoData = allVideos;
      console.log(allVideos);
    });
  }
}
