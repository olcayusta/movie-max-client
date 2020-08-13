import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-big-slider',
  templateUrl: './big-slider.component.html',
  styleUrls: ['./big-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigSliderComponent implements OnInit {
  items = [
    {img: 'https://artist.api.cdn.hbo.com/images/GXnEEqw6S3A4eoAEAABiR/tile?v=43399a484a3f9a271b41e585dd9e8c13&size=1160x497'},
    {img: 'https://artist.api.cdn.hbo.com/images/GXpTMDQMxBAwlRQEAABbd/tile?v=19a2a08039b60dd8d4c88350065e0eed&size=1160x497'},
    {img: 'https://artist.api.cdn.hbo.com/images/GXcWrtQ7UXyRMwgEAAACC/tile?v=ade14276b1c7a56824222f3b391190ad&size=1160x497'},
    {img: 'https://artist.api.cdn.hbo.com/images/GXdu2RQwR0JuAuwEAADZ5/tile?v=4d2f5664075f7907c95689ca0ed53b3c&size=1160x497'},
    {img: 'https://artist.api.cdn.hbo.com/images/GXdcapwxSx5uAuwEAACyS/tile?v=bb3a83ce067008447f01bce6f0925264&size=1160x497'},
    {img: 'https://artist.api.cdn.hbo.com/images/GXuPsHAKYQ8PCwgEAAA6u/tile?v=6e8aa7c350a0fbc13f54f3e210a159a2&size=1160x497'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
