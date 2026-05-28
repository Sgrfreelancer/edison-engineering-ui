import {
  Component
} from '@angular/core';

import {
  RouterOutlet
} from '@angular/router';

import {
  PublicHeader
} from '../../shared/public-header/public-header';

import {
  PublicFooter
} from '../../shared/public-footer/public-footer';

@Component({
  selector: 'app-public-layout',
  imports: [
    RouterOutlet,
    PublicHeader,
    PublicFooter
  ],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss'
})
export class PublicLayout {

}