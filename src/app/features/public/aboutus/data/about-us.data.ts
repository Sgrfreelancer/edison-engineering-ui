import { IMAGE_PATHS } from '../../../../constants/image-paths';
import { AboutUsData } from '../models/about-us.model';

export const ABOUT_US_DATA: AboutUsData = {

  hero: {

    title: 'Engineering Excellence',

    highlight: 'Powered By Innovation',

    description:
      'Edison Engineering delivers industrial electrical, renewable energy and infrastructure solutions that help businesses operate safely, efficiently and sustainably.',

    image: IMAGE_PATHS.aboutUs.aboutus
  },

  story: {

    title: 'Our Story',

    description1:
      'Founded with a vision to transform industrial infrastructure, Edison Engineering has grown into a trusted engineering partner for commercial, industrial and renewable energy projects.',

    description2:
      'Our team combines technical expertise, innovative thinking and industry best practices to deliver solutions that improve efficiency, safety and long-term performance.'
  },

  stats: [

    {
      value: '15+',
      label: 'Years Experience'
    },

    {
      value: '200+',
      label: 'Projects Delivered'
    },

    {
      value: '50+',
      label: 'Team Members'
    },

    {
      value: '15+',
      label: 'Cities Served'
    }

  ],

  mission: {

    icon: '🎯',

    title: 'Our Mission',

    description:
      'To deliver innovative electrical and renewable energy solutions that create long-term value while maintaining the highest standards of safety and quality.'
  },

  vision: {

    icon: '🚀',

    title: 'Our Vision',

    description:
      "To become India's most trusted engineering and renewable energy company by delivering excellence, innovation and sustainable growth."
  },

  values: {

    title: 'Our Core Values',

    description:
      'Principles that guide every project we deliver.',

    items: [

      {
        icon: '⚡',
        title: 'Innovation',
        description:
          'Embracing modern technologies and smart solutions.'
      },

      {
        icon: '🛡️',
        title: 'Safety',
        description:
          'Maintaining the highest standards across projects.'
      },

      {
        icon: '🤝',
        title: 'Integrity',
        description:
          'Building trust through transparency and commitment.'
      },

      {
        icon: '🌱',
        title: 'Sustainability',
        description:
          'Creating environmentally responsible solutions.'
      }

    ]
  }
};