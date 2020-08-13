import {Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty, Output, EventEmitter, Inject} from '@angular/core';
import {SignInDialogComponent} from '../sign-in-dialog/sign-in-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {
  isOpen = false;
  isLoggedIn: Observable<boolean>;

  @Output() toggleSidenav = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  loadStyle(styleName: string): void {
    const head = document.getElementsByTagName('head')[0];

    const themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  openSignInDialog(): void {
    const dialog = this.dialog.open(SignInDialogComponent, {
      width: '550px',
      autoFocus: false
    });
  }

  openPopup($event: MouseEvent): void {
    this.isOpen = true;
    markDirty(this);
  }

  onDetached(): void {
    // console.log('det');
  }

  onAttached(): void {
    // console.log('att');
  }

  overlayOutsideClicked($event: MouseEvent): void {
    this.isOpen = false;
    markDirty(this);
  }


  toggleChange($event: MatSlideToggleChange): void {
    console.log($event.checked);
    if ($event.checked) {
      this.loadStyle('dark_theme.css');
    } else {
      this.loadStyle('light_theme.css');
    }
  }
}
