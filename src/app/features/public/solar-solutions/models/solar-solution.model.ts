export interface SolarSolution {

  slug: string;

  title: string;

  subtitle: string;

  heroImage: string;

  description: string;

  benefits: string[];

  process: string[];

  faqs: SolarFaq[];
}

export interface SolarFaq {

  question: string;

  answer: string;
}