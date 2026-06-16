import { Service } from '../models/service.model';
import { IMAGE_PATHS } from '../../../../constants/image-paths';

export const SERVICES: Service[] = [

  {
    slug: 'residential-electrical-services',

    title: 'Residential Electrical Services',

    subtitle: 'Safe and reliable electrical solutions for homes.',

    heroImage: IMAGE_PATHS.services.residential,

    description:
      'We provide complete electrical installation, maintenance and repair services for residential properties.',

    benefits: [
      'Professional wiring',
      'Safety compliance',
      'Energy efficient solutions',
      '24/7 support'
    ],

    process: [
      'Site inspection',
      'Requirement analysis',
      'Installation',
      'Testing',
      'Maintenance support'
    ],

    faqs: [
      {
        question: 'Do you provide emergency support?',
        answer: 'Yes, we provide emergency electrical support.'
      }
    ]
  },

  {
    slug: 'commercial-electrical-services',

    title: 'Commercial Electrical Services',

    subtitle: 'Reliable electrical infrastructure for businesses.',

    heroImage: IMAGE_PATHS.services.commercial,

    description:
      'End-to-end commercial electrical solutions for offices, malls and commercial buildings.',

    benefits: [
      'Reduced downtime',
      'Energy optimization',
      'Certified engineers'
    ],

    process: [
      'Assessment',
      'Planning',
      'Execution',
      'Testing'
    ],

    faqs: [
      {
        question: 'Do you handle large commercial projects?',
        answer: 'Yes, we handle projects of all sizes.'
      }
    ]
  }

];