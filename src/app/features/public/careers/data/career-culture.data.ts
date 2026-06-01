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

  gallery: {
  title: 'A Place To Learn, Lead & Grow',
  images: [
    {
      image: IMAGE_PATHS.careers.gallery[0]
    },
    {
      image: IMAGE_PATHS.careers.gallery[1]
    },
    {
      image: IMAGE_PATHS.careers.gallery[2]
    },
    {
      image: IMAGE_PATHS.careers.gallery[3]
    }
  ]
},

  benefits: {
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

//   cta: {
//     title: 'Ready To Build Your Future?',
//     description:
//       "Join a team that's shaping the future of electrical engineering and renewable energy.",
//     button: {
//       label: 'View Open Positions',
//       route: '/career'
//     }
//   }
};