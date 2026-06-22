 export const CONTACT_POPUP_DATA = {
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
  modal: {
  brand: {
    badge: '⚡ Edison Engineering',
    title: "Let's Build Your",
    highlight: 'Next Project',
    description:
      'Connect with our engineering experts for solar installations, industrial electrical solutions, energy audits, and infrastructure services.'
  }
  }
}