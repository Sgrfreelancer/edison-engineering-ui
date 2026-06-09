export const PUBLIC_MENU = [

  {
    label: 'Home',
    route: '/'
  },

  {
    label: 'Services',
    children: [

      {
        label: 'Residential Electrical Services',
        route: '/services/residential-electrical-services'
      },

      {
        label: 'Commercial Electrical Services',
        route: '/services/commercial-electrical-services'
      },

      {
        label: 'Industrial Electrical Services',
        route: '/services/industrial-electrical-services'
      },

      {
        label: 'Housing Society Solutions',
        route: '/services/housing-society-solutions'
      },

      {
        label: 'Electrical Audits',
        route: '/services/electrical-audits'
      }
    ]
  },

  {
    label: 'Solar Solutions',
    children: [

      {
        label: 'On-Grid Solar',
        route: '/solar-solutions/on-grid-solar'
      },

      {
        label: 'Off-Grid Solar',
        route: '/solar-solutions/off-grid-solar'
      },

      {
        label: 'Hybrid Solar Systems',
        route: '/solar-solutions/hybrid-solar-systems'
      },

      {
        label: 'Solar AMC Services',
        route: '/solar-solutions/solar-amc-services'
      }
    ]
  },

  {
    label: 'Cities',
    children: [

      {
        label: 'Pune',
        route: '/cities/pune'
      },

      {
        label: 'Mumbai',
        route: '/cities/mumbai'
      },

      {
        label: 'Nashik',
        route: '/cities/nashik'
      },

      {
        label: 'Chhatrapati Sambhajinagar',
        route: '/cities/chhatrapati-sambhajinagar'
      }
    ]
  },

  {
    label: 'Blogs',
    route: '/blogs'
  },

  {
    label: 'About Us',
    route: '/about-us'
  },

  {
    label: 'Contact Us',
    route: '/contact-us'
  },
   {
    label: 'Career',
    children: [
      {
        label: 'View Open Positions',
        route: '/career/careers'
      },
     {
        label: 'Explore Culture',
        route: '/career/culture'
      },
    ]
  },
 {
    label: 'Solar Calculator',
    route: '/solar-calculator'
  },

];