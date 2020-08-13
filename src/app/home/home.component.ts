import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  items = [
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXtf0UwTqw8JHjQEAAAbT/tileburnedin?v=dcd71232ad347885efd56f9e3be516c4&size=200x300',
      title: 'Scoob!'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXnEEoQ4sRMNVoAEAAB0c/tileburnedin?v=a21673c0e84834f6734c3826112fe454&size=200x300',
      title: 'Justice League'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXmpVdwe6e54_wwEAADHg/tileburnedin?v=4366e545c90e25cbd65da31abc2bca16&size=200x300',
      title: 'Joker'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GV46PGQibX52TuwEAAAAE/tileburnedin?v=475c71b877a4b998e221a1431ec951ae&size=200x300',
      title: 'The English Patient'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrR0EARoJo5awgEAAAMM/tileburnedin?v=442ab06d1f490d33e150471ae2da7a9b&size=200x300',
      title: 'Midway'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXpTQQAAyyAwlRQEAABgA/tileburnedin?v=8ac02885b72d9d351b271db50501b1d9&size=200x300',
      title: 'Ford v Ferrari'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXtlhUA0zrsJHjQEAAAfz/tileburnedin?v=227673cd5a23f91939ffc9c5486d3dbc&size=200x300',
      title: 'The Departed'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXo-RygZTqQwlRQEAAAAE/tileburnedin?v=1e38b9a2c8ffe1db68d9b0c826a34f4e&size=200x300',
      title: 'Ad Astra'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrRz_ApV_r7DwgEAAANN/tileburnedin?v=dba9abb0240cc5fa52670fe4cc58713a&size=200x300',
      title: 'Last Christmas'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXbHrSAgxDoNiYAEAAAbh/tileburnedin?v=1bd4ba23ce00ef806901df28bddcf3a7&size=200x300',
      title: 'Contagion'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXtlhCgtvX5uSkwEAAATC/tileburnedin?v=750b5040602d06b62b4dd68df9fefdcf&size=200x300',
      title: 'Dumb & Dumber'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXpTMDQMxBAwlRQEAABbd/tileburnedin?v=cd50a5c58793358e66d372dec287702c&size=200x300',
      title: 'Doctor Sleep'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrHanAQBunUYOAEAAAB3/tileburnedin?v=16dd5af5fe64b5bffc28d667153041c2&size=200x300',
      title: 'Spirited Away'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXvIz4AT1w8JZjgEAAABL/tileburnedin?v=a839282e5b8c3f97c0cc65cde594cff8&size=200x300',
      title: 'Kill Bill Vol. 1'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXvIz4AeIfsJZjgEAAABP/tileburnedin?v=22ba97a1cede6d713ce3bbf44c2d0c79&size=200x300',
      title: 'Kill Bill Vol. 2'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXdcZZgggO5uAuwEAACxi/tileburnedin?v=65ff5fd8e9d446a7c9996bf6701f44d7&size=200x300',
      title: 'Fast Five'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXnEEqw6S3A4eoAEAABiR/tileburnedin?v=122874313e1868d653070fe2ae2f9fc7&size=200x300',
      title: 'Wonder Woman'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrRoWwrze8JwwwEAAAAR/tileburnedin?v=2c11f8ba0ac7aa019fe4599e06f921d6&size=200x300',
      title: 'Transformers: Revenge of the Fallen'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXt53OgBzapuSkwEAAAi4/tileburnedin?v=03d52fae9294a6bd47bdf1e3a1e995eb&size=200x300',
      title: 'Osmasis Jones'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrQ6cQsn_o5awgEAAAGn/tileburnedin?v=7b47595b5bb82929d8dae49c12c4f7f0&size=200x300',
      title: 'I Think I Love My Wife'
    }
  ];
  series = [
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXdRsewUPO5uAuwEAABEI/tileburnedin?v=0ff8ecc156f799f35dc35a873c325511&size=360x202',
      title: 'The Big Bang Theory'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXdbR_gOXWJuAuwEAACVH/tileburnedin?v=4511ec29d718ac344c3765d05f453779&size=360x202&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros',
      title: 'Friends'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXnJ9_wWT34CgwwEAAADK/tileburnedin?v=76656c697199ca8c5545c91431517c95&size=360x202&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:cartoon-network',
      title: 'Foster'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GWjUHgALmU66BwgEAAAH9/tileburnedin?v=90127869c1fe61e26b70407a308da7c4&size=360x202&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo',
      title: 'The English Patient'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXmlR5wlnRcNVoAEAAAOz/tileburnedin?v=76fe1591d8b94765354ac522b4f7652e&size=360x202&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:criterion',
      title: 'Midway'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GVU2gkAgT4oNJjhsJAUDk/tileburnedin?v=c50a7503b2065e0cbb770ee3fd169a56&size=360x202&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo',
      title: 'Batwoman'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GVU2cggagzYNJjhsJATwo/tileburnedin?v=798d6c86609c70c4ac436c1fca472c25&size=360x202&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo',
      title: 'The Departed'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXo-RygZTqQwlRQEAAAAE/tileburnedin?v=1e38b9a2c8ffe1db68d9b0c826a34f4e&size=200x300',
      title: 'Ad Astra'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrRz_ApV_r7DwgEAAANN/tileburnedin?v=dba9abb0240cc5fa52670fe4cc58713a&size=200x300',
      title: 'Last Christmas'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXbHrSAgxDoNiYAEAAAbh/tileburnedin?v=1bd4ba23ce00ef806901df28bddcf3a7&size=200x300',
      title: 'Contagion'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXtlhCgtvX5uSkwEAAATC/tileburnedin?v=750b5040602d06b62b4dd68df9fefdcf&size=200x300',
      title: 'Dumb & Dumber'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXpTMDQMxBAwlRQEAABbd/tileburnedin?v=cd50a5c58793358e66d372dec287702c&size=200x300',
      title: 'Doctor Sleep'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrHanAQBunUYOAEAAAB3/tileburnedin?v=16dd5af5fe64b5bffc28d667153041c2&size=200x300',
      title: 'Spirited Away'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXvIz4AT1w8JZjgEAAABL/tileburnedin?v=a839282e5b8c3f97c0cc65cde594cff8&size=200x300',
      title: 'Kill Bill Vol. 1'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXvIz4AeIfsJZjgEAAABP/tileburnedin?v=22ba97a1cede6d713ce3bbf44c2d0c79&size=200x300',
      title: 'Kill Bill Vol. 2'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXdcZZgggO5uAuwEAACxi/tileburnedin?v=65ff5fd8e9d446a7c9996bf6701f44d7&size=200x300',
      title: 'Fast Five'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXnEEqw6S3A4eoAEAABiR/tileburnedin?v=122874313e1868d653070fe2ae2f9fc7&size=200x300',
      title: 'Wonder Woman'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrRoWwrze8JwwwEAAAAR/tileburnedin?v=2c11f8ba0ac7aa019fe4599e06f921d6&size=200x300',
      title: 'Transformers: Revenge of the Fallen'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXt53OgBzapuSkwEAAAi4/tileburnedin?v=03d52fae9294a6bd47bdf1e3a1e995eb&size=200x300',
      title: 'Osmasis Jones'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrQ6cQsn_o5awgEAAAGn/tileburnedin?v=7b47595b5bb82929d8dae49c12c4f7f0&size=200x300',
      title: 'I Think I Love My Wife'
    }
  ];
  continue = [
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXtaLLAay8cPCwgEAAACy/tile?v=eeb47c618eb7515cb6a4f2ccdecbc5a8&size=374x210&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:not-in-a-hub',
      title: 'South Park'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXbosGwSSVLavMAEAAAvW/tile?v=48542f9a42b310c3a5a5aa3eadeb11c3&size=374x210&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:adult-swim',
      title: 'Samurai Jack'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GVYShyAhg6izCKRAJADnl/tile?v=0c42bbb7ae3f0cc9fff47bd6d25a5135&size=374x210&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo',
      title: 'Ballers'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GV46PGQibX52TuwEAAAAE/tile?v=3f4e051dbfeb7c118af160f4c8e278f4&size=1280x720&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo',
      title: 'The English Patient'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GVU2cCgUFTYNJjhsJATuH/tileburnedin?v=EvrVk7u9WNs2-1dWvE31Ew&size=200x300',
      title: 'Midway'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXn6NpwVG7IBKRwEAAAOo/tileburnedin?v=5591d33d28be98a0d5a65f262077de25&size=200x300',
      title: 'Batwoman'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXtlhUA0zrsJHjQEAAAfz/tileburnedin?v=227673cd5a23f91939ffc9c5486d3dbc&size=200x300',
      title: 'The Departed'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXo-RygZTqQwlRQEAAAAE/tileburnedin?v=1e38b9a2c8ffe1db68d9b0c826a34f4e&size=200x300',
      title: 'Ad Astra'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrRz_ApV_r7DwgEAAANN/tileburnedin?v=dba9abb0240cc5fa52670fe4cc58713a&size=200x300',
      title: 'Last Christmas'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXbHrSAgxDoNiYAEAAAbh/tileburnedin?v=1bd4ba23ce00ef806901df28bddcf3a7&size=200x300',
      title: 'Contagion'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXtlhCgtvX5uSkwEAAATC/tileburnedin?v=750b5040602d06b62b4dd68df9fefdcf&size=200x300',
      title: 'Dumb & Dumber'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXpTMDQMxBAwlRQEAABbd/tileburnedin?v=cd50a5c58793358e66d372dec287702c&size=200x300',
      title: 'Doctor Sleep'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrHanAQBunUYOAEAAAB3/tileburnedin?v=16dd5af5fe64b5bffc28d667153041c2&size=200x300',
      title: 'Spirited Away'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXvIz4AT1w8JZjgEAAABL/tileburnedin?v=a839282e5b8c3f97c0cc65cde594cff8&size=200x300',
      title: 'Kill Bill Vol. 1'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXvIz4AeIfsJZjgEAAABP/tileburnedin?v=22ba97a1cede6d713ce3bbf44c2d0c79&size=200x300',
      title: 'Kill Bill Vol. 2'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXdcZZgggO5uAuwEAACxi/tileburnedin?v=65ff5fd8e9d446a7c9996bf6701f44d7&size=200x300',
      title: 'Fast Five'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXnEEqw6S3A4eoAEAABiR/tileburnedin?v=122874313e1868d653070fe2ae2f9fc7&size=200x300',
      title: 'Wonder Woman'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrRoWwrze8JwwwEAAAAR/tileburnedin?v=2c11f8ba0ac7aa019fe4599e06f921d6&size=200x300',
      title: 'Transformers: Revenge of the Fallen'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXt53OgBzapuSkwEAAAi4/tileburnedin?v=03d52fae9294a6bd47bdf1e3a1e995eb&size=200x300',
      title: 'Osmasis Jones'
    },
    {
      img: 'https://artist.api.cdn.hbo.com/images/GXrQ6cQsn_o5awgEAAAGn/tileburnedin?v=7b47595b5bb82929d8dae49c12c4f7f0&size=200x300',
      title: 'I Think I Love My Wife'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

    /*   const beforeElement = getComputedStyle(document.querySelector('.default-items'), ':before')
       const flexBasis = beforeElement.getPropertyValue('flex-basis');
       const beforeWidth = parseInt(flexBasis, 10);
       const padding = (document.getElementById('slider').offsetWidth * (beforeWidth / 100)) * 2;
       const res = Math.floor(padding);
       document.getElementById('slider').scrollLeft = document.getElementById('slider').offsetWidth - res;*/
    /*document.getElementById('slider').scrollIntoView({
      block: 'end'
    })*/
}
