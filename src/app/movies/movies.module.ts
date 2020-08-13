import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './movies.component';
import {MatChipsModule} from '@angular/material/chips';
import { JustAddedSliderComponent } from './just-added-slider/just-added-slider.component';


@NgModule({
  declarations: [MoviesComponent, JustAddedSliderComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatChipsModule
  ]
})
export class MoviesModule {
}
