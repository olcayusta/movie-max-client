import {Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty} from '@angular/core';
import {SocketService} from '@shared/services/socket.service';
import {HlsService} from '@shared/services/hls.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyComponent implements OnInit {
  msgCtrl = new FormControl('');

  messages = [];

  constructor(
    private socketService: SocketService,
    private hlsService: HlsService
  ) {
  }

  ngOnInit(): void {
    console.log('Party initialized!');

    this.socketService.subject.subscribe(value => {
      console.log(value);

      const video = document.getElementById('video') as HTMLVideoElement;

      if (value === 'play') {
        video.play();
      } else if (value === 'pause') {
        video.pause();
      } else {
        const x = Math.floor(Math.random() * 256);
        const y = Math.floor(Math.random() * 256);
        const z = Math.floor(Math.random() * 256);
        const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
        this.messages.push({
          bgColor: bgColor,
          char: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
          msg: value
        });
      }
      markDirty(this);
    });
  }

  onSubmit(): void {
    this.socketService.send(this.msgCtrl.value);
  }

  onPlay() {
    this.socketService.send('play');
  }

  onPause() {
    this.socketService.send('pause');
  }
}
