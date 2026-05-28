import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.scss'
})
export class TestimonialsSection {

  testimonials = [

    {
      name: 'Rahul Patil',
      company: 'Industrial Owner',
      review:
        'Edison Engineering delivered outstanding electrical solutions for our factory.'
    },

    {
      name: 'Amit Sharma',
      company: 'Commercial Client',
      review:
        'Professional team with excellent solar installation support.'
    },

    {
      name: 'Sneha Kulkarni',
      company: 'Housing Society',
      review:
        'Reliable maintenance and quality work. Highly recommended.'
    }
  ];
}