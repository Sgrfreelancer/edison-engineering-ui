
export interface ContactInfoItem {
  icon: string;
  title: string;
  value: string;
}

export interface ContactHero {
  title: string;
  description: string;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  options?: string[];
}

export interface ContactCTA {
  title: string;
  description: string;
  buttonText: string;
}
export interface ContactModalBrand {
  badge: string;
  title: string;
  highlight: string;
  description: string;
}
export interface ContactModal {
  brand: ContactModalBrand;
}
export interface ContactUsData {

  hero: ContactHero;

  contactInfo: ContactInfoItem[];

  form: {
    title: string;
    description:string;
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

  cta: ContactCTA;
  modal: ContactModal;  
}