import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.scss',
})
export class CtaSection {

  content = {
    badge: "Let's Build Something Exceptional",

    title: 'Ready To Power Your Next Engineering Project?',

    description:
      'Whether you need industrial electrical solutions, solar installations, energy audits or infrastructure services, our team is ready to deliver reliable and future-ready results.',

    primaryButton: {
      label: 'Request A Quote',
      route: '/contact-us'
    },

    secondaryButton: {
      label: 'Explore Services',
      route: '/services'
    }
  };

  
}