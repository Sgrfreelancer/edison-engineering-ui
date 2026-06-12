import {
  Industry
} from '../models/industry.model';
import { IMAGE_PATHS } from '../../../../constants/image-paths';
export const INDUSTRIES: Industry[] = [

  {
    slug: 'manufacturing-plants',

    title:
      'Manufacturing Plant Electrical Solutions',

    subtitle:
      'Complete industrial electrical infrastructure and solar solutions for manufacturing facilities.',

    heroImage:IMAGE_PATHS.industries.manufacturing,

    description:
      'We provide complete electrical contracting, industrial panel setup, transformer installation, energy audits, and industrial solar solutions for manufacturing plants across Maharashtra.',

    services: [
      'Industrial Electrical Panels',
      'Transformer Installation',
      'Factory Wiring',
      'Energy Audits',
      'Industrial Solar Plants',
      'Electrical Maintenance'
    ],

    benefits: [
      'Reduced energy costs',
      'Industrial safety compliance',
      'Lower operational downtime',
      'Improved energy efficiency',
      'Reliable electrical infrastructure'
    ],

    faqs: [
      {
        question:
          'Do you provide turnkey industrial electrical projects?',
        answer:
          'Yes, we provide complete industrial electrical infrastructure solutions.'
      },
      {
        question:
          'Do you support factory solar installations?',
        answer:
          'Yes, we provide industrial rooftop and ground-mounted solar systems.'
      }
    ]
  },

  {
    slug: 'commercial-buildings',

    title:
      'Commercial Building Electrical Solutions',

    subtitle:
      'Modern electrical systems for offices, malls, and commercial complexes.',

    heroImage:
      IMAGE_PATHS.industries.commercial,

    description:
      'We provide electrical design, installation, maintenance, and solar solutions for commercial buildings ensuring safety, efficiency, and uninterrupted operations.',

    services: [
      'Commercial Wiring',
      'Electrical Panels',
      'Lighting Systems',
      'Energy Audits',
      'Solar Installation',
      'Power Backup Systems'
    ],

    benefits: [
      'Efficient power usage',
      'Reduced electricity bills',
      'Modern infrastructure',
      'Improved operational reliability',
      'Scalable electrical systems'
    ],

    faqs: [
      {
        question:
          'Do you work on commercial high-rise buildings?',
        answer:
          'Yes, we provide solutions for all types of commercial projects.'
      },
      {
        question:
          'Do you provide annual maintenance contracts?',
        answer:
          'Yes, we provide complete AMC support.'
      }
    ]
  },

  {
    slug: 'housing-societies',

    title:
      'Housing Society Electrical Solutions',

    subtitle:
      'Reliable electrical and solar solutions for residential societies.',

    heroImage:
      IMAGE_PATHS.industries.housing,

    description:
      'We help housing societies with common area electrification, solar systems, electrical safety audits, backup systems, and maintenance services.',

    services: [
      'Society Electrical Maintenance',
      'Solar Rooftop Systems',
      'DG Backup Systems',
      'Electrical Safety Audits',
      'Common Area Lighting',
      'Panel Maintenance'
    ],

    benefits: [
      'Reduced common electricity bills',
      'Improved resident safety',
      'Reliable power systems',
      'Long-term cost savings',
      'Low maintenance solutions'
    ],

    faqs: [
      {
        question:
          'Do you install solar systems for societies?',
        answer:
          'Yes, we provide customized society solar solutions.'
      },
      {
        question:
          'Can you handle electrical maintenance contracts?',
        answer:
          'Yes, we provide long-term maintenance support.'
      }
    ]
  },

  {
    slug: 'warehouses',

    title:
      'Warehouse Electrical Solutions',

    subtitle:
      'Efficient electrical infrastructure for warehouses and logistics hubs.',

    heroImage:
      IMAGE_PATHS.industries.warehouse,

    description:
      'We provide electrical setup, warehouse lighting, backup systems, and energy-efficient infrastructure for warehouses and logistics operations.',

    services: [
      'Warehouse Lighting',
      'Industrial Wiring',
      'Electrical Panels',
      'Backup Systems',
      'Energy Audits',
      'Solar Power Systems'
    ],

    benefits: [
      'Energy efficient operations',
      'Reduced downtime',
      'Improved warehouse safety',
      'Reliable backup systems',
      'Cost-effective infrastructure'
    ],

    faqs: [
      {
        question:
          'Do you provide high-bay warehouse lighting?',
        answer:
          'Yes, we provide energy-efficient warehouse lighting systems.'
      },
      {
        question:
          'Do you support large warehouse projects?',
        answer:
          'Yes, we handle warehouses of all scales.'
      }
    ]
  },

  {
    slug: 'hospitals',

    title:
      'Hospital Electrical Solutions',

    subtitle:
      'Critical power and electrical systems for hospitals and healthcare facilities.',

    heroImage:
      IMAGE_PATHS.industries.hospital,

    description:
      'We provide reliable electrical systems, emergency backup solutions, and energy-efficient infrastructure for hospitals and healthcare institutions.',

    services: [
      'Emergency Backup Systems',
      'Hospital Wiring',
      'Electrical Panels',
      'Power Monitoring',
      'UPS Systems',
      'Maintenance Services'
    ],

    benefits: [
      'Reliable emergency power',
      '24/7 operational support',
      'Safety compliance',
      'Reduced power failures',
      'Critical system reliability'
    ],

    faqs: [
      {
        question:
          'Do you provide emergency backup systems?',
        answer:
          'Yes, we provide complete hospital backup solutions.'
      },
      {
        question:
          'Do you support hospital maintenance?',
        answer:
          'Yes, we provide regular maintenance and support services.'
      }
    ]
  },

  {
    slug: 'educational-institutes',

    title:
      'Educational Institute Electrical Solutions',

    subtitle:
      'Safe and efficient electrical infrastructure for schools and colleges.',

    heroImage:
     IMAGE_PATHS.industries.education,

    description:
      'We provide complete electrical setup, campus lighting, solar systems, and safety infrastructure for educational institutions.',

    services: [
      'Campus Electrical Setup',
      'Solar Systems',
      'Electrical Maintenance',
      'Lighting Solutions',
      'Safety Audits',
      'Backup Systems'
    ],

    benefits: [
      'Energy savings',
      'Safe learning environment',
      'Reliable campus infrastructure',
      'Reduced operational costs',
      'Sustainable energy solutions'
    ],

    faqs: [
      {
        question:
          'Do you provide solar systems for schools?',
        answer:
          'Yes, we provide customized solar systems for educational campuses.'
      },
      {
        question:
          'Can you support large educational campuses?',
        answer:
          'Yes, we provide scalable electrical solutions.'
      }
    ]
  }

];