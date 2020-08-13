import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-just-added-slider',
  templateUrl: './just-added-slider.component.html',
  styleUrls: ['./just-added-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JustAddedSliderComponent implements OnInit {
  items = [
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXfuVlQsPHkytlAEAABPn/tileburnedin?v=e9a691e4fe690e0bb3398b1d16b8a872&size=200x300',
      title: 'Funny Farm'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXt50aAWNN8PCwgEAAAk3/tileburnedin?v=983686ede54bd5165ffe34bcfd8f4895&size=200x300',
      title: 'The Longest Yard'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXelZwgTDV7PDfgEAAA8A/tileburnedin?v=f7d401d921aab90d2f1c0d0f12cc6336&size=200x300',
      title: 'Dirty Harry'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXmav8ArlATC3wwEAACyg/tileburnedin?v=e811e6ad70544d54d2374cb23ab3e57a&size=200x300',
      title: 'Thirteen Ghosts'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXYTyCg8IgsIAIwEAAAOb/tileburnedin?v=8221de1ddfcbfc9076dc9052c49f071e&size=200x300',
      title: ''
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXtZ0GAMvfMPCwgEAAABv/tileburnedin?v=e44a9b0c1cac515d52345f556879699b&size=200x300',
      title: 'John Q'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXuOr5Qwi1ZuSkwEAAAxJ/tileburnedin?v=ab1c91d136491f35d26ef822a243d21b&size=200x300',
      title: 'Get Smart'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrQWiQPZl77DwgEAAABw/tileburnedin?v=e0fbeeb0e1e6320a583a8fbf62ba65bb&size=200x300',
      title: 'Magnolia'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
