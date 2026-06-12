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
      `${BASE}/careerbenefits.avif`,
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