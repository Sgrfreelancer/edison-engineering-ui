import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-industries-section',
  templateUrl: './industries-section.html',
  styleUrl: './industries-section.scss'
})
export class IndustriesSection {

  industries = [

    'Manufacturing Plants',

    'Commercial Buildings',

    'Housing Societies',

    'Warehouses',

    'Hospitals',

    'Educational Institutes'
  ];
}