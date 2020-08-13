import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PartyRoutingModule} from './party-routing.module';
import {PartyComponent} from './party.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [PartyComponent],
  imports: [
    CommonModule,
    PartyRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PartyModule {
}
