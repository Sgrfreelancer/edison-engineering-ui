import { JobPageData } from '../models/job.model';

export const JOB_PAGE_DATA: JobPageData = {

  title: 'Open Positions',

  description:
    'Explore current opportunities at Edison Engineering.',

  jobs: [

    {
      title: 'Electrical Engineer',
      location: 'Pune',
      type: 'Full Time',
      experience: '2+ Years',
      description:
        'Design, execute and maintain industrial electrical systems.',
      route: '/career/electrical-engineer'
    },

    {
      title: 'Solar Project Engineer',
      location: 'Mumbai',
      type: 'Full Time',
      experience: '3+ Years',
      description:
        'Manage solar installation projects and commissioning activities.',
      route: '/career/solar-project-engineer'
    },

    {
      title: 'Site Supervisor',
      location: 'Nashik',
      type: 'Full Time',
      experience: '1+ Years',
      description:
        'Supervise electrical and solar project execution on-site.',
      route: '/career/site-supervisor'
    }

  ]

};