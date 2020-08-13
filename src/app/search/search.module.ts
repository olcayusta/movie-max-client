import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [SearchComponent],
    imports: [
        CommonModule,
        SearchRoutingModule,
        MatInputModule
    ]
})
export class SearchModule { }
