import {
  Component
} from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';

import {
  INDUSTRIES
} from '../../data/industries.data';

import {
  Industry
} from '../../models/industry.model';

import {
  IndustryHero
} from '../../components/industry-hero/industry-hero';

import {
  IndustryServices
} from '../../components/industry-services/industry-services';

import {
  IndustryBenefits
} from '../../components/industry-benefits/industry-benefits';

import {
  IndustryFaqComponent
} from '../../components/industry-faq/industry-faq';

import {
  IndustryCta
} from '../../components/industry-cta/industry-cta';

@Component({
  selector: 'app-industry-details',
  imports: [
    IndustryHero,
    IndustryServices,
    IndustryBenefits,
    IndustryFaqComponent,
    IndustryCta
  ],
  templateUrl: './industry-details.html',
  styleUrl: './industry-details.scss'
})
export class IndustryDetails {

  industry!: Industry;

  constructor(
    private route: ActivatedRoute
  ) {

    const slug =
      this.route.snapshot.paramMap.get('slug');

    this.industry =
      INDUSTRIES.find(
        (x: Industry) => x.slug === slug
      )!;
  }
}