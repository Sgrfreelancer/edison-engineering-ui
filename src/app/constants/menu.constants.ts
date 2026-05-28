import {
  MenuItem
} from '../models/menu-item.model';

export const MENU_ITEMS:
MenuItem[] = [

  {
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/admin/dashboard',
    roles: ['Admin', 'User']
  },

  {
    label: 'Blogs',
    icon: 'article',
    route: '/admin/blogs',
    roles: ['Admin']
  },

  {
    label: 'Services',
    icon: 'build',
    route: '/admin/services',
    roles: ['Admin']
  },

  {
    label: 'Jobs',
    icon: 'work',
    route: '/admin/jobs',
    roles: ['Admin']
  }
];