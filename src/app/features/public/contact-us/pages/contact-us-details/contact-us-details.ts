import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import { environment } from '../../../../../../environments/environment';
import { CONTACT_US_DATA } from '../../data/contact-us.data';
@Component({
  selector: 'app-contact-us-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us-details.html',
  styleUrl: './contact-us-details.scss',
})
export class ContactUsDetails {

  mapUrl: SafeResourceUrl;
  contactData = CONTACT_US_DATA;
  constructor(
    private sanitizer: DomSanitizer
  ) {

    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      environment.googleMaps.pune
    );

  }

}