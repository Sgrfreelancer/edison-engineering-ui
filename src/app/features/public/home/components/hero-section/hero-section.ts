import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IMAGE_PATHS } from '../../../../../constants/image-paths';
import { ContactPopupService } from '../../../../../core/services/contact-popup-service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  constructor(
    private router: Router,
    private popup: ContactPopupService,
  ) {
  }
  openContactModal(): void {

    this.router.navigate(['/contact-us']).then(() => {

      this.popup.open();

    });

  }
  content = {

    badge: 'Trusted Electrical & Solar Experts',

    title: 'Powering India With',

    description:
      'Edison Engineering delivers industrial, commercial and solar energy solutions designed for efficiency, safety and sustainability.',

    image: IMAGE_PATHS.home.homebanner,

    primaryButton: {
      label: 'Get Free Quote',
      route: '/contact-us'
    },

    secondaryButton: {
      label: 'Explore Services',
      route: '/services/residential-electrical-services'
    }

  };

}