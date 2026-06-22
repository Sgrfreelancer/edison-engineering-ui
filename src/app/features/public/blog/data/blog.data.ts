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

  
};