import {
  Component
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

import {
  PUBLIC_MENU
} from '../../constants/public-menu.constants';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-public-header',
  imports: [
    RouterLink,CommonModule,RouterModule
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
   currentRoute = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }

  isParentActive(item: any): boolean {
  if (!item.children) return false;

  return item.children.some((child: any) =>
    this.isActive(child.route)
  );
}
}