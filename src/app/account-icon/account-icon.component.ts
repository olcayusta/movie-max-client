import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-account-icon',
  templateUrl: 'account_circle-24px.svg',
  styleUrls: ['./account-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
