import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-industry-benefits',
  templateUrl: './industry-benefits.html',
  styleUrl: './industry-benefits.scss'
})
export class IndustryBenefits {

  @Input()
  benefits: string[] = [];
}