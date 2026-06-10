
import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  RouterLink
} from '@angular/router';

@Component({
  selector: 'app-solar-calculator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './solar-calculator.html',
  styleUrl: './solar-calculator.scss'
})
export class SolarCalculator {

  monthlyBill = 10000;

  annualSavings = 96000;

  paybackYears = 4;

  recommendedKW = 10;

  co2Reduction = 16;

  calculate(): void {

    this.recommendedKW =
      Math.max(
        1,
        Math.round(this.monthlyBill / 1000)
      );

    this.annualSavings =
      Math.round(
        this.monthlyBill * 12 * 0.8
      );

    this.paybackYears =
      Math.max(
        3,
        Math.round(
          (this.recommendedKW * 55000) /
          this.annualSavings
        )
      );

    this.co2Reduction =
      Number(
        (
          this.recommendedKW * 1.6
        ).toFixed(1)
      );
  }

}