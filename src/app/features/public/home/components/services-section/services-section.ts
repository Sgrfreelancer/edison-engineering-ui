import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss'
})
export class ServicesSection {

  services = [

    {
      title: 'Residential Electrical Services',
      description:
        'Complete electrical solutions for homes and apartments.'
    },

    {
      title: 'Commercial Electrical Services',
      description:
        'Reliable electrical infrastructure for businesses.'
    },

    {
      title: 'Industrial Electrical Services',
      description:
        'Heavy-duty industrial power and automation solutions.'
    },

    {
      title: 'Electrical Audits',
      description:
        'Professional energy and safety audit services.'
    }
  ];
}