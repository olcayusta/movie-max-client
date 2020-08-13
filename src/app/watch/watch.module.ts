import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WatchRoutingModule} from './watch-routing.module';
import {WatchComponent} from './watch.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [WatchComponent],
  imports: [
    CommonModule,
    WatchRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class WatchModule {
}
