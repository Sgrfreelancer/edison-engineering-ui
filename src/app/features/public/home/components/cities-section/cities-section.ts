import {
  Component
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cities-section',
  templateUrl: './cities-section.html',
 imports: [
  CommonModule,
    RouterModule
  ],
  styleUrl: './cities-section.scss'
})
export class CitiesSection {

  cities = [

    {
      name: 'Pune',
      slug: 'pune'
    },

    {
      name: 'Mumbai',
      slug: 'mumbai'
    },

    {
      name: 'Nashik',
      slug: 'nashik'
    },

    {
    name: 'Chhatrapati Sambhajinagar',
    slug: 'chhatrapati-sambhajinagar'
  },

    {
      name: 'Nandurbar',
      slug: 'nandurbar'
    },

    {
      name: 'Shahada',
      slug: 'shahada'
    }

  ];
}