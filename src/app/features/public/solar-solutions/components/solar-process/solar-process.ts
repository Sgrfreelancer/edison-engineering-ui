import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-solar-process',
  templateUrl: './solar-process.html',
  styleUrl: './solar-process.scss'
})
export class SolarProcess {

  @Input()
  process: string[] = [];
}