export interface AboutUsStat {
  value: string;
  label: string;
}

export interface AboutUsValue {
  icon: string;
  title: string;
  description: string;
}

export interface AboutUsData {

  hero: {
    title: string;
    highlight: string;
    description: string;
    image: string;
  };

  story: {
    title: string;
    description1: string;
    description2: string;
  };

  stats: AboutUsStat[];

  mission: {
    icon: string;
    title: string;
    description: string;
  };

  vision: {
    icon: string;
    title: string;
    description: string;
  };

  values: {
    title: string;
    description: string;
    items: AboutUsValue[];
  };
}