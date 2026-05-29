import {
  Routes
} from '@angular/router';

import {
  Login
} from './features/auth/login/login';

import {
  Home
} from './features/home/home/home';

import {
  authGuard
} from './guards/auth-guard';

import {
  MainLayout
} from './layouts/main-layout/main-layout';

import {
  PublicLayout
} from './layouts/public-layout/public-layout';

import {
  Home as PublicHome
} from './features/public/home/home';

import {
  BlogList
} from './features/blogs/pages/blog-list/blog-list';

import {
  CreateBlog
} from './features/blogs/pages/create-blog/create-blog';

import {
  EditBlog
} from './features/blogs/pages/edit-blog/edit-blog';

import {
  SolarSolutionDetails
} from './features/public/solar-solutions/pages/solar-solution-details/solar-solution-details';

import {
  IndustryDetails
} from './features/public/industries/pages/industry-details/industry-details';

import {
  CityDetails
} from './features/public/cities/pages/city-details/city-details';

export const routes: Routes = [

  /*
  |--------------------------------------------------------------------------
  | PUBLIC WEBSITE
  |--------------------------------------------------------------------------
  */

  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: PublicHome
      },
      {
        path: 'solar-solutions/:slug',
        component: SolarSolutionDetails
      },
      {
        path: 'industries/:slug',
        component: IndustryDetails
      },
      {
        path: 'cities/:slug',
        component: CityDetails
      }
    ]
  },

  /*
  |--------------------------------------------------------------------------
  | LOGIN
  |--------------------------------------------------------------------------
  */

  {
    path: 'login',
    component: Login
  },

  /*
  |--------------------------------------------------------------------------
  | ADMIN PANEL
  |--------------------------------------------------------------------------
  */

  {
    path: 'admin',
    component: MainLayout,
    canActivate: [
      authGuard
    ],
    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        component: Home
      },

      {
        path: 'blogs',
        component: BlogList
      },

      {
        path: 'blogs/create',
        component: CreateBlog
      },

      {
        path: 'blogs/edit/:slug',
        component: EditBlog
      }
    ]
  },

  /*
  |--------------------------------------------------------------------------
  | FALLBACK
  |--------------------------------------------------------------------------
  */

  {
    path: '**',
    redirectTo: ''
  }
];