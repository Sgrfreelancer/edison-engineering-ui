import {
  Component
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

@Component({
  selector: 'app-industries-section',
  imports: [
    RouterLink
  ],
  templateUrl: './industries-section.html',
  styleUrl: './industries-section.scss'
})
export class IndustriesSection {

  industries = [

    {
      title: 'Manufacturing Plants',

      slug: 'manufacturing-plants',

      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276',

      description:
        'Industrial electrical infrastructure and solar solutions.'
    },

    {
      title: 'Commercial Buildings',

      slug: 'commercial-buildings',

      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',

      description:
        'Electrical systems for offices and commercial complexes.'
    },

    {
      title: 'Housing Societies',

      slug: 'housing-societies',

      image:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118',

      description:
        'Reliable electrical and solar systems for societies.'
    },

    {
      title: 'Warehouses',

      slug: 'warehouses',

      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952',

      description:
        'Efficient warehouse electrical infrastructure solutions.'
    },

    {
      title: 'Hospitals',

      slug: 'hospitals',

      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',

      description:
        'Critical electrical systems for healthcare facilities.'
    },

    {
      title: 'Educational Institutes',

      slug: 'educational-institutes',

      image:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',

      description:
        'Safe and modern campus electrical infrastructure.'
    }
  ];
}