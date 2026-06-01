
import {
  Component
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

import {
  CommonModule
} from '@angular/common';
import { IMAGE_PATHS } from '../../../../../constants/image-paths';
import { ABOUT_US_DATA } from '../../data/about-us.data';
@Component({
  selector: 'app-about-us-details',
  imports: [CommonModule],
  templateUrl: './about-us-details.html',
  styleUrl: './about-us-details.scss',
})
export class AboutUsDetails {
imagePaths =IMAGE_PATHS
 aboutData = ABOUT_US_DATA;
}