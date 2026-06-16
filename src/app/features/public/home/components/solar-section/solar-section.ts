import {
  Component
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';
import { IMAGE_PATHS } from '../../../../../constants/image-paths';
@Component({
  selector: 'app-solar-section',
  imports: [
    RouterLink
  ],
  templateUrl: './solar-section.html',
  styleUrl: './solar-section.scss'
})
export class SolarSection {

  solarSolutions = [

    {
      title: 'On Grid Solar',

      slug: 'on-grid-solar',

      image:IMAGE_PATHS.solarSolutions.onGridSolar,
       

      description:
        'Reduce electricity bills with efficient grid-connected solar systems.'
    },

    {
      title: 'Off Grid Solar',

      slug: 'off-grid-solar',

      image:IMAGE_PATHS.solarSolutions.offGridSolar,
        

      description:
        'Independent solar systems with battery backup.'
    },

    {
      title: 'Hybrid Solar',

      slug: 'hybrid-solar',

      image:IMAGE_PATHS.solarSolutions.hybridSolar,
       

      description:
        'Smart hybrid systems with grid and battery support.'
    },
    {
      title: 'Solar AMC Service',

      slug: 'solar-amc-services',

      image:IMAGE_PATHS.solarSolutions.hybridSolar,
       

      description:
        'Smart hybrid systems with grid and battery support.'
    }
  ];
}