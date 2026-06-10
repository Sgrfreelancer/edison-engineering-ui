import { CareerCultureData } from '../models/career-culture.model';
import { IMAGE_PATHS } from '../../../../constants/image-paths';
export const CAREER_CULTURE_DATA: CareerCultureData = {
  hero: {
    title: 'Where Engineers Build The Future',
    description:
      'Join a workplace where innovation, teamwork, and professional growth come together to create impactful electrical and solar projects.',

    primaryButton: {
      label: 'View Open Positions',
      route: '/career'
    },

    secondaryButton: {
      label: 'Contact Us',
      route: '/contact-us'
    }
  },

  stats: [
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
  ],

  values: {
    title: 'What Makes Us Different',

    description:
      'We create an environment where employees can innovate, collaborate, and grow professionally.',

    items: [
      {
        icon: '🚀',
        title: 'Innovation',
        description:
          'We embrace modern technologies and smarter engineering solutions.'
      },
      {
        icon: '🤝',
        title: 'Teamwork',
        description:
          'Every successful project is powered by collaboration and trust.'
      },
      {
        icon: '📚',
        title: 'Learning',
        description:
          'Continuous training and certifications help our employees stay ahead.'
      },
      {
        icon: '⚡',
        title: 'Impact',
        description:
          'Build projects that power industries, businesses and communities.'
      }
    ]
  },


  workCulture: {
    title: 'Why People Love Working Here',
    image: IMAGE_PATHS.careers.culture,
   items: [
    'Career Growth Opportunities',
    'Industry Leading Projects',
    'Continuous Learning Programs',
    'Collaborative Work Environment',
    'Supportive Leadership Team'
  ]
  },
employeeBenefits: {
  title: 'Employee Benefits',

  items: [
    {
      icon: '🏥',
      title: 'Health Support',
      description:
        'Comprehensive health and wellness initiatives.'
    },

    {
      icon: '🎓',
      title: 'Learning Programs',
      description:
        'Certifications and technical training support.'
    },

    {
      icon: '🏆',
      title: 'Recognition',
      description:
        'Rewards for innovation and exceptional performance.'
    }
  ]
},


};