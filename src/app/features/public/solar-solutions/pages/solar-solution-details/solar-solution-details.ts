import {
  Component,
  OnInit,
  inject
} from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';

import {
  SOLAR_SOLUTIONS
} from '../../data/solar-solutions.data';

import {
  SolarSolution
} from '../../models/solar-solution.model';

import {
  SolarHero
} from '../../components/solar-hero/solar-hero';

import {
  SolarBenefits
} from '../../components/solar-benefits/solar-benefits';

import {
  SolarProcess
} from '../../components/solar-process/solar-process';

import {
  SolarFaqComponent
} from '../../components/solar-faq/solar-faq';

import {
  SolarCta
} from '../../components/solar-cta/solar-cta';

@Component({
  selector:
    'app-solar-solution-details',

  imports: [
    SolarHero,
    SolarBenefits,
    SolarProcess,
    SolarFaqComponent,
    SolarCta
  ],

  templateUrl:
    './solar-solution-details.html',

  styleUrl:
    './solar-solution-details.scss'
})
export class SolarSolutionDetails
implements OnInit {

  private route =
    inject(ActivatedRoute);

  solution:
    SolarSolution | undefined;

  ngOnInit(): void {

    const slug =
      this.route.snapshot.paramMap.get('slug');

    this.solution =
      SOLAR_SOLUTIONS.find(
        x => x.slug === slug
      );
  }
}