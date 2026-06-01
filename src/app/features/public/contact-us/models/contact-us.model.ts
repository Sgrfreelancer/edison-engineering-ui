export interface ContactInfoItem {
  icon: string;
  title: string;
  value: string;
}

export interface ContactHero {
  title: string;
  highlight: string;
  description: string;
}

export interface ContactFormField {
  type: string;
  placeholder: string;
}

export interface ContactUsData {

  hero: ContactHero;

  contactInfo: ContactInfoItem[];

  form: {
    title: string;
    subtitle: string;
    fields: ContactFormField[];
    buttonText: string;
  };

  company: {
    title: string;
    description: string;
    address: string;
    email: string;
    phone: string;
  };

  cta: {
    title: string;
    description: string;
    buttonText: string;
    phone: string;
  };
}