import {
  Component
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterLink
} from '@angular/router';
import { IMAGE_PATHS } from '../../../../../constants/image-paths';
@Component({
  selector: 'app-hero-section',
  imports: [
    RouterLink,CommonModule
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
imagesource =IMAGE_PATHS;
}