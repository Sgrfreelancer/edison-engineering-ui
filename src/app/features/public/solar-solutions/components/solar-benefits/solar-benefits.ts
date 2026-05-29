import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-solar-benefits',
  templateUrl: './solar-benefits.html',
  styleUrl: './solar-benefits.scss'
})
export class SolarBenefits {

  @Input()
  benefits: string[] = [];
}