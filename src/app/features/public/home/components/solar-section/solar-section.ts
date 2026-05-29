import {
  Component
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

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

      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276',

      description:
        'Reduce electricity bills with efficient grid-connected solar systems.'
    },

    {
      title: 'Off Grid Solar',

      slug: 'off-grid-solar',

      image:
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b',

      description:
        'Independent solar systems with battery backup.'
    },

    {
      title: 'Hybrid Solar',

      slug: 'hybrid-solar',

      image:
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',

      description:
        'Smart hybrid systems with grid and battery support.'
    }
  ];
}