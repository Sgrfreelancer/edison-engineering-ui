import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-cities-section',
  templateUrl: './cities-section.html',
  styleUrl: './cities-section.scss'
})
export class CitiesSection {

  cities = [

    'Pune',

    'Mumbai',

    'Nashik',

    'Sambhaji Nagar',

    'Nandurbar',

    'Shahada'
  ];
}