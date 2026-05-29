import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-solar-hero',
  templateUrl: './solar-hero.html',
  styleUrl: './solar-hero.scss'
})
export class SolarHero {

  @Input()
  title = '';

  @Input()
  subtitle = '';

  @Input()
  image = '';
}