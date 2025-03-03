export interface NavItem {
  name: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
}

export interface FooterLink extends NavItem {}

export interface NewsletterContent {
  title: string;
  description: string;
  buttonText: string;
}

export interface FooterContent {
  about: string;
  quickLinks: FooterLink[];
  newsletter: NewsletterContent;
  copyright: string;
}
