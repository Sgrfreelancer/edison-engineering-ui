import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IMAGE_PATHS } from '../../../../../constants/image-paths';

@Component({
  selector: 'app-career-section',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './career-section.html',
  styleUrl: './career-section.scss'
})
export class CareerSection {

  imagePaths = IMAGE_PATHS;

  content = {
    title: 'Build the Future of',
    highlightedTitle: 'Electrical & Solar Engineering',
    description: `
      Join a team that is shaping industrial infrastructure,
      renewable energy projects, and electrical excellence
      across India. Work alongside talented engineers,
      project managers, and innovators.
    `,
    primaryButton: {
      label: 'View Open Positions',
      route: '/career/careers'
    },
    secondaryButton: {
      label: 'Explore Culture',
      route: '/career/culture'
    }
  };

  highlights = [
    {
      title: 'Career Growth',
      description:
        'Work on large-scale industrial and solar projects with opportunities for advancement.',
      icon: '📈'
    },
    {
      title: 'Learning Culture',
      description:
        'Continuous training, certifications, and mentorship from industry experts.',
      icon: '🎓'
    },
    {
      title: 'Innovative Projects',
      description:
        'Contribute to modern electrical infrastructure and renewable energy solutions.',
      icon: '⚡'
    }
  ];

  statistics = [
    {
      value: '50+',
      label: 'Team Members'
    },
    {
      value: '200+',
      label: 'Projects Delivered'
    },
    {
      value: '15+',
      label: 'Cities Served'
    },
    {
      value: '100%',
      label: 'Growth Focused'
    }
  ];

}