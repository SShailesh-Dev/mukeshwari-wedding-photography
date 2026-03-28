import { LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon?: LucideIcon;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}
