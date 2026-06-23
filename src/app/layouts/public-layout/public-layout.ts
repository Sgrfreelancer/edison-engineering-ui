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
import {ContactPopup} from '../../shared/contact-popup/contact-popup/contact-popup'
@Component({
  selector: 'app-public-layout',
  imports: [
    RouterOutlet,
    PublicHeader,
    PublicFooter,
    ContactPopup
  ],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss'
})
export class PublicLayout {

}