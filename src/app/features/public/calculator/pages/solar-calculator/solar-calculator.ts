import { Component, OnInit } from '@angular/core';
import { SOLAR_CALCULATOR_DATA } from '../../data/solar-calculator.data';
import { FormsModule } from '@angular/forms';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CityService } from '../../../../../core/services/citie.service';
import { City } from '../../../../../core/model/citie.model';

import { SolarCalculatorService } from '../../../../../core/services/calculator.service';
import { SolarCalculatorPayload } from '../../../../../core/model/solar-calculator.model';
import { ChangeDetectorRef, inject } from '@angular/core';
import { finalize } from 'rxjs';
@Component({
  selector: 'app-solar-calculator',
  standalone: true,
  templateUrl: './solar-calculator.html',
  styleUrls: ['./solar-calculator.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DecimalPipe
  ]
})
export class SolarCalculator implements OnInit {

  solarData = SOLAR_CALCULATOR_DATA;

  private cityService = inject(CityService);
  private solarCalculatorService = inject(SolarCalculatorService);
  private cdr = inject(ChangeDetectorRef);
  cities: City[] = [];

  selectedLocation = '';
  monthlyBill = 10000;

  annualSavings = 0;
  co2Reduction = 0;
  paybackYears = 0;
  recommendedKW = 0;


  isLoading = false;

  ngOnInit(): void {
    this.loadCities();
  }


  loadCities(): void {
    this.cityService.getCities().subscribe({
      next: (response) => {
        this.cities = [...response.data];

        if (this.cities.length) {
          this.selectedLocation = this.cities[0].name;
        }

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  calculate(): void {

    if (!this.selectedLocation) {
      return;
    }

    const payload: SolarCalculatorPayload = {
      city: this.selectedLocation,
      monthlyBill: this.monthlyBill
    };

    this.isLoading = true;

    this.solarCalculatorService
      .calculate(payload)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (response) => {

          this.annualSavings = response.data.yearlySavings;
          this.co2Reduction = response.data.estimatedUnits;
          this.paybackYears = response.data.paybackYears;
          this.recommendedKW = response.data.systemSizeKW;

          console.log('Updated Values:', {
            annualSavings: this.annualSavings,
            co2Reduction: this.co2Reduction,
            paybackYears: this.paybackYears,
            recommendedKW: this.recommendedKW
          });
        },
        error: (err) => console.error(err)
      });
  }

  onLocationChange(): void {
    this.calculate();
  }

  onBillChange(): void {
    this.calculate();
  }
}