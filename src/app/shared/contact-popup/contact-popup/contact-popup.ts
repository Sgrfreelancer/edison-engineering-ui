import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ContactPopupService } from '../../../core/services/contact-popup-service';
import { LeadService } from '../../../core/services/lead.service';
import { LeadPayload } from '../../../core/model/lead.model';

import { CONTACT_POPUP_DATA } from '../../data/contact-popup.data';

@Component({
  selector: 'app-contact-popup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact-popup.html',
  styleUrl: './contact-popup.scss'
})
export class ContactPopup {

  popupData = CONTACT_POPUP_DATA;

  isOpen = false;

  isSubmitting = false;

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

    private popupService: ContactPopupService,

    private leadService: LeadService,

    private toastr: ToastrService

  ) {

    this.popupService.popupState$.subscribe(state => {

      this.isOpen = state;

    });

  }

  close() {

    this.popupService.close();

  }

  submitForm(contactForm: NgForm) {

    if (this.isSubmitting) return;

    this.isSubmitting = true;

    this.leadService.createLead(this.leadPayload).subscribe({

      next: (response: any) => {

        this.isSubmitting = false;

        if (response.success) {

          this.toastr.success(response.message);

          this.close();

          contactForm.resetForm();

        }

      },

      error: () => {

        this.isSubmitting = false;

        this.toastr.error('Failed to submit lead');

      }

    });

  }

}