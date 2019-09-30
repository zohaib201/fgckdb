import { Component, OnInit } from '@angular/core';
import { AudioService } from './audio.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {

  constructor(private audioService: AudioService) { }

  localAudioData: any = '';
  url = environment.baseUrl;

  ngOnInit() {

    this.audioService.getall().subscribe((allAudios: any) => {
      this.localAudioData = allAudios;
      console.log(allAudios);
    });
  }

  delaudio(id) {
    console.log(id + ' this is the prayer id');
    this.audioService.delaudio(id).subscribe(res => {
      console.log('prayer deleted successfuly');
    });

    this.audioService.getall().subscribe((allAudios: any) => {
      this.localAudioData = allAudios;
      console.log(allAudios);
    });
  }
}
