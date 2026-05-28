import {
  Component
} from '@angular/core';

import {
  HeroSection
} from './components/hero-section/hero-section';

import {
  ServicesSection
} from './components/services-section/services-section';

import {
  SolarSection
} from './components/solar-section/solar-section';

import {
  IndustriesSection
} from './components/industries-section/industries-section';

import {
  WhyChooseUs
} from './components/why-choose-us/why-choose-us';

import {
  CitiesSection
} from './components/cities-section/cities-section';

import {
  TestimonialsSection
} from './components/testimonials-section/testimonials-section';

import {
  CtaSection
} from './components/cta-section/cta-section';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    ServicesSection,
    SolarSection,
    IndustriesSection,
    WhyChooseUs,
    CitiesSection,
    TestimonialsSection,
    CtaSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}