import {
  Component,inject
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
import { IMAGE_PATHS } from '../../constants/image-paths';
import { ContactPopupService } from '../../core/services/contact-popup-service';
import { CityService } from '../../core/services/citie.service';
import { City } from '../../core/model/citie.model';
import { ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-public-header',
  imports: [
    RouterLink,CommonModule,RouterModule
  ],
  templateUrl: './public-header.html',
  styleUrl: './public-header.scss'
})
export class PublicHeader {
   private cityService = inject(CityService);
   private cdr = inject(ChangeDetectorRef);
imagePaths = IMAGE_PATHS;
 cities: City[] = [];
  menu =
    PUBLIC_MENU;

  mobileMenuOpen =
    false;
 selectedLocation = '';
  toggleMobileMenu() {

    this.mobileMenuOpen =
      !this.mobileMenuOpen;
  }
    openedMobileMenu: string | null = null;

toggleSubMenu(label: string): void {
  this.openedMobileMenu =
    this.openedMobileMenu === label ? null : label;
}
   currentRoute = '';
ngOnInit(): void {
    this.loadCities();
  }


 loadCities(): void {
  this.cityService.getCities().subscribe({
    next: (response) => {

      this.cities = response.data;

      if (this.cities.length) {
        this.selectedLocation = this.cities[0].name;
      }

      // Find Cities menu
      const cityMenu = this.menu.find(item => item.label === 'Cities');

      if (cityMenu) {
        cityMenu.children = this.cities.map(city => ({
          label: city.name,
          route: `/cities/${city.slug}`
        }));
      }

      console.log(this.menu);
this.cdr.detectChanges();
    },
    error: (error) => {
      console.error(error);
    }
  });
}
  constructor(private router: Router,private popup: ContactPopupService,) {
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
openContactModal(): void {

    this.router.navigate(['/contact-us']).then(() => {

      this.popup.open();

    });

  }


}