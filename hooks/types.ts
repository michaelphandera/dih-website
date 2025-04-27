export interface NavDropdownItem {
    text: string;
    link: string;
  }
  
  export interface Document {
    id: number;
    title: string;
    description: string;
    type: string;
    size: string;
    date: string;
    category: string;
    color: string;
    icon: string;
    district?: string;
  }
  
  export interface RecentDocument {
    id: number;
    name: string;
    category: string;
    format: string;
    uploaded: string;
    icon: string;
    iconColor: string;
  }
  
  export interface Ministry {
    id: number;
    image: string;
    name: string;
    description: string;
    socialLinks: {
      website: string;
      phone: string;
      email: string;
    };
  }
  
  export interface UpdateItem {
    id: number;
    image: string;
    author: {
      name: string;
      image: string;
      link: string;
    };
    title: string;
    date: string;
    description: string;
  }
  
  export interface InfographicItem {
    id: number;
    image: string;
    tag: string;
    title: string;
    category: { name: string; link: string };
    location: { name: string; link: string };
    description: string;
  }
  
  export interface FeatureItem {
    text: string;
  }
  
  export interface PromoCard {
    icon: string;
    title: string;
    link: string;
  }
  
  export interface CTAButton {
    text: string;
    link: string;
    style: 'style1' | 'style2';
  }
  
  export interface AccessCard {
    icon: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    buttonStyle: 'style1' | 'style2';
    color: string;
  }
  
  export interface FooterLink {
    text: string;
    link: string;
  }
  
  export interface ContactInfo {
    icon: string;
    title: string;
    content: string | React.ReactNode;
  }
  
  export interface SocialLink {
    icon: string;
    link: string;
    label: string;
  }