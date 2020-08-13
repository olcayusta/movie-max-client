import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-avatar-popup',
  templateUrl: './avatar-popup.component.html',
  styleUrls: ['./avatar-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarPopupComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  exitToApp(): void {
    this.authService.logout();
  }
}
