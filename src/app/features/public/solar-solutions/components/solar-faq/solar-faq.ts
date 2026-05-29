import {
  Component,
  Input
} from '@angular/core';

import {
  SolarFaq
} from '../../models/solar-solution.model';

@Component({
  selector: 'app-solar-faq',
  templateUrl: './solar-faq.html',
  styleUrl: './solar-faq.scss'
})
export class SolarFaqComponent {

  @Input()
  faqs: SolarFaq[] = [];
}