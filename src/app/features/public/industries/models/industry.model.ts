export interface Industry {

  slug: string;

  title: string;

  subtitle: string;

  heroImage: string;

  description: string;

  services: string[];

  benefits: string[];

  faqs: IndustryFaq[];
}

export interface IndustryFaq {

  question: string;

  answer: string;
}