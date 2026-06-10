import {
  Component
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';
import { IMAGE_PATHS } from '../../../../../constants/image-paths';
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

       image: IMAGE_PATHS.industries.manufacturing,

      description:
        'Industrial electrical infrastructure and solar solutions.'
    },

    {
      title: 'Commercial Buildings',

      slug: 'commercial-buildings',

      image: IMAGE_PATHS.industries.commercial,
       

      description:
        'Electrical systems for offices and commercial complexes.'
    },

    {
      title: 'Housing Societies',

      slug: 'housing-societies',

       image: IMAGE_PATHS.industries.housing,
      

      description:
        'Reliable electrical and solar systems for societies.'
    },

    {
      title: 'Warehouses',

      slug: 'warehouses',

       image: IMAGE_PATHS.industries.warehouse,
        

      description:
        'Efficient warehouse electrical infrastructure solutions.'
    },

    {
      title: 'Hospitals',

      slug: 'hospitals',

       image: IMAGE_PATHS.industries.hospital,

      description:
        'Critical electrical systems for healthcare facilities.'
    },

    {
      title: 'Educational Institutes',

      slug: 'educational-institutes',

       image: IMAGE_PATHS.industries.education,
       

      description:
        'Safe and modern campus electrical infrastructure.'
    }
  ];
}