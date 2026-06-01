

import {
  Component
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CareerCultureData } from '../../models/career-culture.model';
import { CAREER_CULTURE_DATA } from '../../data/career-culture.data';
@Component({
  selector: 'app-explore-cluture',
  imports: [RouterLink],
  templateUrl: './explore-cluture.html',
  styleUrl: './explore-cluture.scss',
})
export class ExploreCluture {
cultureData: CareerCultureData =
    CAREER_CULTURE_DATA;
  

}