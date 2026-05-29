export interface City {

  slug: string;

  name: string;

  title: string;

  subtitle: string;

  heroImage: string;

  description: string;

  services: string[];

  industries: string[];

  faqs: CityFaq[];
}

export interface CityFaq {

  question: string;

  answer: string;
}