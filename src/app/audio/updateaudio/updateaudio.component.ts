import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateaudio',
  templateUrl: './updateaudio.component.html',
  styleUrls: ['./updateaudio.component.scss']
})
export class UpdateaudioComponent implements OnInit {

  constructor(private audioService: AudioService,
    private activatedRoute: ActivatedRoute,
    private router: Router, ) { }

    audioData = {
      imageUrl: '',
      description: '',
      audioUrl: ''
    };

    localAudioData: any;
    imageData;
    audioId;
    private audiotSub: Subscription;

    onLoadImage(event) {
      this.imageData = <File>event.target.files[0];
      console.log(this.imageData);
    }

    onUpdateAudio() {
      // this.videoData.selectedVenue = this.selectedItems;
      if (this.imageData === undefined) {
        this.audioService.Update(this.audioId, this.audioData).subscribe((data: any) => {
          this.localAudioData = data;
          this.router.navigate(['/audio']);
        })
      } else {
        this.audioService.upLoadImage(this.imageData).subscribe((data: any) => {
          this.audioData.imageUrl = data;
          this.audioService.Update(this.audioId, this.audioData).subscribe((data: any) => {
            this.localAudioData = data;
            this.router.navigate(['/audio']);
          })
        })
      }
  
    }

  ngOnInit() {

    this.audioId = this.activatedRoute.snapshot.params.audioId;

    this.audioService.getByid(this.audioId);
    this.audiotSub = this.audioService.getUpdatedAudio().subscribe((audio: any) => {
      this.audioData = audio;
      console.log(audio);
    });
  }
  

}
