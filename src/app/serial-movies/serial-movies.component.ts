import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-serial-movies',
  templateUrl: './serial-movies.component.html',
  styleUrls: ['./serial-movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SerialMoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
