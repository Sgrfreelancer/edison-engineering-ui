export interface CareerCultureButton {
  label: string;
  route: string;
}

export interface CareerCultureStat {
  value: string;
  label: string;
}

export interface CareerCultureValue {
  icon: string;
  title: string;
  description: string;
}

export interface CareerCultureGalleryImage {
  image: string;
}

export interface CareerCultureGallery {
  title: string;
  images: CareerCultureGalleryImage[];
}

export interface CareerCultureBenefits {
  title: string;
  image: string;
  items: string[];
}

export interface CareerCultureCTA {
  title: string;
  description: string;
  button: CareerCultureButton;
}

export interface CareerCultureData {
  hero: {
    title: string;
    description: string;
    primaryButton: CareerCultureButton;
    secondaryButton: CareerCultureButton;
  };

  stats: CareerCultureStat[];

  values: {
    title: string;
    description: string;
    items: CareerCultureValue[];
  };

  gallery: CareerCultureGallery;

  benefits: CareerCultureBenefits;


}