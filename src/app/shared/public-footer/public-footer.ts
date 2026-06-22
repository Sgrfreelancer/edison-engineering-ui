import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMAGE_PATHS } from '../../constants/image-paths';

@Component({
  selector: 'app-public-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './public-footer.html',
  styleUrl: './public-footer.scss'
})
export class PublicFooter {

  footer = {

    logo: IMAGE_PATHS.logo,

    company: {
      description:
        'Leading solar and electrical engineering company delivering energy-efficient solutions across India.'
    },

    services: {
      title: 'Services',
      links: [
        {
          label: 'Residential Services',
          route: '/services/residential-electrical-services'
        },
        {
          label: 'Commercial Services',
          route: '/services/commercial-electrical-services'
        },
        {
          label: 'Industrial Services',
          route: '/services/industrial-electrical-services'
        },
        {
          label: 'Electrical Audits',
          route: '/services/electrical-audits'
        }
      ]
    },

    quickLinks: {
      title: 'Quick Links',
      links: [
        {
          label: 'Home',
          route: '/'
        },
        {
          label: 'About Us',
          route: '/about-us'
        },
        {
          label: 'Blogs',
          route: '/blogs'
        },
        {
          label: 'Solar Calculator',
          route: '/solar-calculator'
        },
        {
          label: 'Contact Us',
          route: '/contact-us'
        }
      ]
    },

    contact: {
      title: 'Contact',
      address: 'Pune, Maharashtra',
      email: 'info@edisonengineering.in',
      phone: '+91 9876543210'
    },

    copyright:
      '© 2026 Edison Engineering. All rights reserved.'
  };

}