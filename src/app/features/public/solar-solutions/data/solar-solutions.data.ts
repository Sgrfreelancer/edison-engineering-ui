import {
  SolarSolution
} from '../models/solar-solution.model';

export const SOLAR_SOLUTIONS:
SolarSolution[] = [

  {
    slug: 'on-grid-solar',

    title: 'On Grid Solar System',

    subtitle:
      'Reduce electricity bills with grid-connected solar systems.',

    heroImage:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276',

    description:
      'On-grid solar systems are connected with the electricity grid and help reduce power bills significantly.',

    benefits: [
      'Lower electricity bills',
      'Net metering benefits',
      'Low maintenance',
      'Government subsidy support'
    ],

    process: [
      'Site inspection',
      'Load analysis',
      'Solar design',
      'Installation',
      'Net meter approval'
    ],

    faqs: [
      {
        question:
          'What is an on-grid solar system?',

        answer:
          'An on-grid solar system is connected to the utility electricity grid.'
      },
      {
        question:
          'Does it work during power cuts?',

        answer:
          'No, standard on-grid systems stop during power outages for safety.'
      }
    ]
  },

  {
    slug: 'off-grid-solar',

    title: 'Off Grid Solar System',

    subtitle:
      'Complete energy independence with battery backup.',

    heroImage:
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b',

    description:
      'Off-grid systems operate independently using battery storage.',

    benefits: [
      'Power backup',
      'No dependency on grid',
      'Ideal for remote locations'
    ],

    process: [
      'Energy assessment',
      'Battery planning',
      'Solar installation',
      'Battery integration'
    ],

    faqs: [
      {
        question:
          'Who should use off-grid systems?',

        answer:
          'Remote locations with unreliable electricity.'
      }
    ]
  }
];