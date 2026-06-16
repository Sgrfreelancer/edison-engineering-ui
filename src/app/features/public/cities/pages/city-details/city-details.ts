import {
  Component,
  OnInit
} from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';

import {
  CITIES
} from '../../data/cities.data';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.html',
  styleUrl: './city-details.scss'
})
export class CityDetails
implements OnInit {

  city: any;

  constructor(
    private route: ActivatedRoute
  ) {}

   ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const slug = params.get('slug');

      this.city = CITIES.find(
        item => item.slug === slug
      );
    });

  }

}

