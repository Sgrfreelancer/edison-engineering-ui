import { BlogSectionData } from '../models/blog.model';
import { IMAGE_PATHS } from '../../../../constants/image-paths';
export const BLOG_DATA: BlogSectionData = {

  badge: 'Latest Insights',

  title: 'Engineering &',

  highlight: 'Energy Insights',

  description:
    'Explore industry trends, solar innovations, energy efficiency tips and engineering expertise from Edison Engineering.',

  featuredBlog: {

    category: 'Solar Energy',

    title:
      'How Solar Energy Is Transforming Industrial Operations',

    description:
      'Discover how industries are reducing costs, improving sustainability and increasing energy independence through solar solutions.',

   image: IMAGE_PATHS.aboutUs.aboutus,

    route: '/blogs/solar-energy-transforming-industries',

    buttonText: 'Read Article →'
  },

  blogs: [
    {
      category: 'Electrical Engineering',

      title:
        'Importance Of Electrical Audits For Industries',

      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7',

      route: '/blogs/electrical-audit-guide',

      buttonText: 'Read More →'
    },

    {
      category: 'Renewable Energy',

      title:
        'Future Trends In Renewable Energy Solutions',

      image:
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',

      route: '/blogs/renewable-energy-trends',

      buttonText: 'Read More →'
    },

    {
      category: 'Infrastructure',

      title:
        'Building Reliable Industrial Infrastructure',

      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952',

      route: '/blogs/industrial-infrastructure',

      buttonText: 'Read More →'
    }
  ]
};