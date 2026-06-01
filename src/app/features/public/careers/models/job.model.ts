export interface Job {
  title: string;
  location: string;
  type: string;
  description: string;
  experience: string;
  route: string;
}

export interface JobPageData {
  title: string;
  description: string;
  jobs: Job[];
}