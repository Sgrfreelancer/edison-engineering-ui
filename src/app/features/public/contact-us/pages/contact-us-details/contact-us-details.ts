
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import { environment } from '../../../../../../environments/environment';

import { LeadPayload } from '../../../../../core/model/lead.model';
import { LeadService } from '../../../../../core/services/lead.service';
import { IMAGE_PATHS } from '../../../../../constants/image-paths';
import { CONTACT_US_DATA } from '../../data/contact-us.data';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  isSubmitting = false;
  isContactModalOpen = false;

  leadPayload: LeadPayload = {
    name: '',
    phone: '',
    email: '',
    city: '',
    serviceType: '',
    message: '',
    source: 'Website Contact Form'
  };

  constructor(
    private leadService: LeadService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService
  ) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      environment.googleMaps.pune
    );
  }

  openContactModal(): void {
    this.isContactModalOpen = true;
  }

  closeContactModal(): void {
    this.isContactModalOpen = false;
  }

  submitForm(contactForm: NgForm): void {

    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    this.leadService.createLead(this.leadPayload).subscribe({

      next: (response: any) => {

        this.isSubmitting = false;

        if (response.success) {

          this.toastr.success(
            response.message,
            'Success'
          );

          this.closeContactModal();

          contactForm.resetForm();

          this.leadPayload = {
            name: '',
            phone: '',
            email: '',
            city: '',
            serviceType: '',
            message: '',
            source: 'Website Contact Form'
          };
        }
      },

      error: (error) => {

        this.isSubmitting = false;

        console.error(error);

        this.toastr.error(
          'Failed to submit lead',
          'Error'
        );
      }
    });
  }
}

