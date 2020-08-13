import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {HlsService} from '../shared/services/hls.service';
import Hls from 'hls.js';
import {environment} from '@environments/environment';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchComponent implements OnInit {
  video;

  constructor(
    private hlsService: HlsService
  ) { }

  ngOnInit(): void {
    this.video = document.getElementById('video');
    const videoSrc = `http://localhost/movie7/h264_master.m3u8`;
    this.hlsService.hls.loadSource(videoSrc);
    this.hlsService.attachMedia(this.video);
    this.hlsService.hls.on(Hls.Events.MANIFEST_PARSED, () => {
      // this.video.play();
    });
  }

}
