// export const IMAGE_PATHS = {

//   industries: {

//     manufacturing:
//       'https://images.unsplash.com/photo-1509391366360-2e959784a276',

//     commercial:
//        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',

//     housing:
//        'https://images.unsplash.com/photo-1460317442991-0ec209397118',

//     warehouse:
//       'https://images.unsplash.com/photo-1517048676732-d65bc937f952',

//     hospital:
//       'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
//     education:
//        'https://plus.unsplash.com/premium_photo-1713296257466-2cc410d37676',
//   },

//   careers: {

//     banner:
//       'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000'
//   },

//   solarSolutions: {

//     ongridsolar:
//       'https://images.unsplash.com/photo-1509391366360-2e959784a276',
//     OffGridSolar:
//      'https://images.unsplash.com/photo-1497440001374-f26997328c1b',
//     HybridSolar:
//        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
//   }
// };


import { environment } from '../../environments/environment';
const BASE = environment.imageBaseUrl;

export const IMAGE_PATHS = {

home:{
  homebanner:
  `${BASE}/homebanner.jpg`
},
aboutUs:{
  aboutus:
  `${BASE}/aboutus.jpg`
},
  industries: {

    manufacturing:
      `${BASE}/manufacturing.jpg`,

    commercial:
      `${BASE}/commercial.jpg`,

    housing:
      `${BASE}/housing.jpg`,

    warehouse:
      `${BASE}/warehouse.jpg`,

    hospital:
      `${BASE}/hospital.jpg`,

    education:
      `${BASE}/education.jpg`,
  },

  careers: {

    banner:
      `${BASE}/banner.jpg`,

    culture:
      `${BASE}/careerbenefits.jpg`,
     gallery: [
    `${BASE}/gallery1.jpg`,
    `${BASE}/gallery2.jpg`,
    `${BASE}/gallery3.jpg`,
    `${BASE}/gallery4.jpg`
  ]

    
  },

  solarSolutions: {

    onGridSolar:
      `${BASE}/on-grid-solar.jpg`,

    offGridSolar:
      `${BASE}/off-grid-solar.jpg`,

    hybridSolar:
      `${BASE}/hybrid-solar.jpg`,
  },

  
};