
import { ContactUsData } from '../models/contact-us.model';

export const CONTACT_US_DATA: ContactUsData = {

  hero: {
    title: "Stay Connected",
    description:
      'Multiple ways to reach our engineering team.'
  },

  contactInfo: [
    {
      icon: '📞',
      title: 'Call Us',
      value: '+91 98765 43210'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      value: 'info@edisonengineering.com'
    },
    {
      icon: '📍',
      title: 'Visit Office',
      value: 'Pune, Maharashtra'
    },
    {
      icon: '⏰',
      title: 'Working Hours',
      value: 'Mon - Sat | 9:00 AM - 6:00 PM'
    }
  ],

  form: {
   title: 'Request a Consultation',
  description: "Fill out the form and we'll contact you shortly.",
    buttonText: 'Send Message',

    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Full Name'
      },
      {
        name: 'phone',
        label: 'Phone',
        type: 'tel',
        placeholder: 'Phone Number'
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Email Address'
      },
      {
        name: 'city',
        label: 'City',
        type: 'text',
        placeholder: 'City'
      },
      {
        name: 'serviceType',
        label: 'Service',
        type: 'select',
        placeholder: 'Select Service',
        options: [
          'Solar Installation',
          'Electrical Engineering',
          'Energy Audit',
          'Maintenance'
        ]
      },
      {
        name: 'source',
        label: 'Source',
        type: 'select',
        placeholder: 'How did you hear about us?',
        options: [
          'Google',
          'Facebook',
          'LinkedIn',
          'Referral'
        ]
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Your Message'
      }
    ]
  },

  company: {
    title: 'Edison Engineering',
    description:
      'We deliver reliable electrical engineering, solar energy and industrial infrastructure solutions for businesses across India.',
    address: 'Pune, Maharashtra',
    email: 'info@edisonengineering.com',
    phone: '+91 98765 43210'
  },

  cta: {
    title: 'Ready To Discuss Your Project?',
    description:
      'Tell us about your requirements and our engineering team will get back to you shortly.',
    buttonText: 'Get In Touch'
  },
  modal: {
  brand: {
    badge: '⚡ Edison Engineering',
    title: "Let's Build Your",
    highlight: 'Next Project',
    description:
      'Connect with our engineering experts for solar installations, industrial electrical solutions, energy audits, and infrastructure services.'
  }

}
};