import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-industry-services',
  templateUrl: './industry-services.html',
  styleUrl: './industry-services.scss'
})
export class IndustryServices {

  @Input()
  services: string[] = [];
}