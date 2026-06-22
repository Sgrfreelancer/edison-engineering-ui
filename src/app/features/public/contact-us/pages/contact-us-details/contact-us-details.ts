
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import { environment } from '../../../../../../environments/environment';

import { IMAGE_PATHS } from '../../../../../constants/image-paths';
import { CONTACT_US_DATA } from '../../data/contact-us.data';
import { ContactPopupService } from '../../../../../core/services/contact-popup-service';
@Component({
  selector: 'app-contact-us-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './contact-us-details.html',
  styleUrl: './contact-us-details.scss'
})
export class ContactUsDetails {

  mapUrl!: SafeResourceUrl;

  imagePaths = IMAGE_PATHS;
  contactData = CONTACT_US_DATA;

  constructor(
     private popup: ContactPopupService,
    private sanitizer: DomSanitizer,
  ) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      environment.googleMaps.pune
    );
  }
openContactModal(): void {

  console.log('Button clicked');

  this.popup.open();

}

}

