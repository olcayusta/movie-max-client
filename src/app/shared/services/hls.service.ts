import { Injectable } from '@angular/core';
import Hls from 'hls.js';

@Injectable({
  providedIn: 'root',
})
export class HlsService {
  hls: Hls;

  constructor() {
    this.hls = new Hls();
  }

  attachMedia(mediaElement: HTMLMediaElement): void {
    this.hls.attachMedia(mediaElement);
  }
}
