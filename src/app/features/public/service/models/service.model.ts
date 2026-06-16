export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;

  description: string;

  benefits: string[];

  process: string[];

  faqs: ServiceFaq[];
}