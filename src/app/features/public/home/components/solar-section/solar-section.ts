import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-solar-section',
  templateUrl: './solar-section.html',
  styleUrl: './solar-section.scss'
})
export class SolarSection {

  solutions = [

    {
      title: 'On-Grid Solar',
      description:
        'Reduce electricity bills with grid-connected solar systems.',
      image:
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b'
    },

    {
      title: 'Off-Grid Solar',
      description:
        'Independent solar systems with battery backup.',
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276'
    },

    {
      title: 'Commercial Solar',
      description:
        'Large-scale solar installations for businesses.',
      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7'
    }
  ];
}