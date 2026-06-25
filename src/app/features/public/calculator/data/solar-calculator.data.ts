import { SolarCalculatorData } from '../models/solar-calculator.model';

export const SOLAR_CALCULATOR_DATA: SolarCalculatorData = {

  badge: '⚡ Smart Solar Calculator',

  hero: {
    title: 'Power Your Future',
    highlight: 'With Solar Energy',

    description:
      'Harness the power of solar energy to reduce electricity costs and increase long-term savings. Edison Engineering delivers industrial, commercial and residential solar solutions.'
  },

  buttons: {
    quoteText: 'Get Free Quote →',
    quoteRoute: '/contact-us',

    callText: '📞 Call Us',
    phone: '+919876543210'
  },

  calculator: {

    title: 'Estimate Your Savings',

    description:
      'See how much you could save with solar.',

    billRange: {
      min: 1000,
      max: 100000,
      step: 500
    },

    resultCards: {

      annualSavings: {
        title: 'Annual Savings',
        bgClass: 'bg-blue-50',
        textClass: 'text-blue-600'
      },

      co2Offset: {
        title: 'Tons CO₂ Offset',
        bgClass: 'bg-sky-50',
        textClass: 'text-sky-600'
      },

      paybackYears: {
        title: 'Payback Years',
        bgClass: 'bg-indigo-50',
        textClass: 'text-indigo-600'
      },

      recommendedKW: {
        title: 'kW System',
        bgClass: 'bg-green-50',
        textClass: 'text-green-600'
      }

    },
  

    buttonText: 'Calculate',

  }
};