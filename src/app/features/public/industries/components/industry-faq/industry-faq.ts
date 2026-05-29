import {
  Component,
  Input
} from '@angular/core';

import {
  IndustryFaq as IndustryFaqModel
} from '../../models/industry.model';

@Component({
  selector: 'app-industry-faq',
  templateUrl: './industry-faq.html',
  styleUrl: './industry-faq.scss'
})
export class IndustryFaqComponent {

  @Input()
  faqs:
    IndustryFaqModel[] = [];
}