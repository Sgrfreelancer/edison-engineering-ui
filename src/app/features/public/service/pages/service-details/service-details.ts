
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.model';
import { SERVICES } from '../../data/services.data';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ContactPopupService } from '../../../../../core/services/contact-popup-service';
@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './service-details.html',
  styleUrl: './service-details.scss'
})
export class ServiceDetails implements OnInit {
  constructor(private router: Router,private popup: ContactPopupService,) {}
  openContactModal(): void {

    this.router.navigate(['/contact-us']).then(() => {

      this.popup.open();

    });

  }
  private route = inject(ActivatedRoute);
service: Service | undefined;

  servicesData: any = {
    'residential-electrical-services': {
      title: 'Residential Electrical Services',
      description: 'Complete electrical solutions for homes and apartments.'
    },

    'commercial-electrical-services': {
      title: 'Commercial Electrical Services',
      description: 'Reliable electrical infrastructure for businesses.'
    },

    'industrial-electrical-services': {
      title: 'Industrial Electrical Services',
      description: 'Heavy-duty industrial power and automation solutions.'
    },

    'housing-society-solutions': {
      title: 'Housing Society Solutions',
      description: 'End-to-end electrical infrastructure for housing societies.'
    },

    'electrical-audits': {
      title: 'Electrical Audits',
      description: 'Professional energy and safety audit services.'
    }
  };

  ngOnInit(): void {

  this.route.paramMap.subscribe(params => {

    const slug = params.get('slug');

    this.service = SERVICES.find(
      item => item.slug === slug
    );

  });

}
}