import {
  Component
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

import {
  PUBLIC_MENU
} from '../../constants/public-menu.constants';

@Component({
  selector: 'app-public-header',
  imports: [
    RouterLink
  ],
  templateUrl: './public-header.html',
  styleUrl: './public-header.scss'
})
export class PublicHeader {

  menu =
    PUBLIC_MENU;

  mobileMenuOpen =
    false;

  toggleMobileMenu() {

    this.mobileMenuOpen =
      !this.mobileMenuOpen;
  }
}