import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addaudio',
  templateUrl: './addaudio.component.html',
  styleUrls: ['./addaudio.component.scss']
})
export class AddaudioComponent implements OnInit {

  constructor(private audioService: AudioService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    audioData = {
      imageUrl: '',
      description: '',
      audioUrl: ''
    };
    localAudioData: any;
    imageData;

    
    onCreateAudio() {
      this.audioService.upLoadImage(this.imageData).subscribe((imageName: any) => {
        console.log(imageName);
        this.audioData.imageUrl = imageName;
        this.audioService.createAudio(this.audioData).subscribe((data: any) => {
          console.log(this.audioData);
          this.localAudioData = data;
          this.router.navigate(['/audio']);
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
