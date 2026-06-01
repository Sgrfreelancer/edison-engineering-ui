import { ContactUsData } from '../models/contact-us.model';

export const CONTACT_US_DATA: ContactUsData = {

  hero: {
    title: "Let's Discuss Your",
    highlight: "Next Engineering Project",
    description:
      "Whether you need industrial electrical services, solar solutions, energy audits or infrastructure support, our team is ready to help."
  },

  contactInfo: [
    { icon: '📞', title: 'Call Us', value: '+91 98765 43210' },
    { icon: '✉️', title: 'Email Us', value: 'info@edisonengineering.com' },
    { icon: '📍', title: 'Visit Office', value: 'Pune, Maharashtra' },
    { icon: '⏰', title: 'Working Hours', value: 'Mon - Sat 9:00 AM - 6:00 PM' }
  ],

  form: {
    title: 'Get In Touch',
    subtitle: 'SEND US A MESSAGE',
    buttonText: 'Send Message',
    fields: [
      { type: 'text', placeholder: 'Full Name' },
      { type: 'email', placeholder: 'Email Address' },
      { type: 'tel', placeholder: 'Phone Number' },
      { type: 'text', placeholder: 'Subject' },
      { type: 'textarea', placeholder: 'Your Message' }
    ]
  },

  company: {
    title: 'Edison Engineering',
    description:
      'We deliver reliable electrical engineering, solar energy and industrial infrastructure solutions for businesses across Gujarat and India.',
    address: 'Your Office Address Here',
    email: 'info@edisonengineering.com',
    phone: '+91 98765 43210'
  },

  cta: {
    title: 'Ready To Start Your Project?',
    description:
      'Connect with our engineering experts and discover the right solution for your business.',
    buttonText: 'Call Us Today',
    phone: '+919876543210'
  }
};