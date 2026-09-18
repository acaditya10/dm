export type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Modular' | 'Bathrooms';

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Modular' | 'Bathrooms';
  image: string;
  location: string;
  description: string;
  specs: {
    area?: string;
    style: string;
    duration: string;
    highlights: string[];
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'home' | 'commercial' | 'modular' | 'renovation';
  startingPrice?: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  location?: string;
  text: string;
  rating: number;
  date?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
}
