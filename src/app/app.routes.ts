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
import {
   JobDetails
   } from './features/public/careers/pages/job-details/job-details';
import {
   ExploreCluture 
  } from './features/public/careers/pages/explore-cluture/explore-cluture';
import {
   AboutUsDetails
   } from './features/public/aboutus/pages/about-us-details/about-us-details';
import { ContactUsDetails } from './features/public/contact-us/pages/contact-us-details/contact-us-details';
import {SolarCalculator} from './features/public/calculator/pages/solar-calculator/solar-calculator'
import { BlogDetails } from './features/public/blog/pages/blog-details/blog-details';
import { ServiceDetails } from './features/public/service/pages/service-details/service-details';
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
        path: 'services/:slug',
        component: ServiceDetails
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
      },
      {
        path: 'career/culture',
        component: ExploreCluture
      },
      {
        path: 'career/careers',
        component: JobDetails
      },
      {
        path: 'about-us',
        component: AboutUsDetails
      },
      {
        path: 'contact-us',
        component:ContactUsDetails 
      },
      {
        path: 'solar-calculator',
        component:SolarCalculator 
      },
      {
        path: 'blogs',
        component:BlogDetails 
      },
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