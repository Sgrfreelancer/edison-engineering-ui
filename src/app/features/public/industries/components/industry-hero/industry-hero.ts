import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-industry-hero',
  templateUrl: './industry-hero.html',
  styleUrl: './industry-hero.scss'
})
export class IndustryHero {

  @Input()
  title = '';

  @Input()
  subtitle = '';

  @Input()
  image = '';
}