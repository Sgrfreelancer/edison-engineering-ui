import {
  Component
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-services-section',
   standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss'
})
export class ServicesSection {

 services = [
  {
    slug: 'residential-electrical-services',
    title: 'Residential Electrical Services',
    description: 'Complete electrical solutions for homes and apartments.'
  },

  {
    slug: 'commercial-electrical-services',
    title: 'Commercial Electrical Services',
    description: 'Reliable electrical infrastructure for businesses.'
  },

  {
    slug: 'industrial-electrical-services',
    title: 'Industrial Electrical Services',
    description: 'Heavy-duty industrial power and automation solutions.'
  },

  {
    slug: 'housing-society-solutions',
    title: 'Housing Society Solutions',
    description: 'End-to-end electrical infrastructure for housing societies.'
  },

  {
    slug: 'electrical-audits',
    title: 'Electrical Audits',
    description: 'Professional energy and safety audit services.'
  }
];
}