import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink, FooterSection, SocialLink } from '../types/navigation';

interface FooterProps {
  logo: {
    text: string;
    href: string;
  };
  description: string;
  sections: FooterSection[];
  socials: SocialLink[];
  copyright: string;
}

export default function Footer({ logo, description, sections, socials, copyright }: FooterProps) {
  return (
    <footer className="bg-stone-950 pt-32 pb-12 w-full border-t border-stone-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 px-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <Link to={logo.href} className="text-xl font-headline text-white hover:text-amber-500 transition-colors duration-300">
            {logo.text}
          </Link>
          <p className="font-body text-stone-300 leading-relaxed text-sm max-w-xs">
            {description}
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.title} className="space-y-6">
            <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.1rem]">
              {section.title}
            </h4>
            <div className="flex flex-col space-y-3">
              {section.links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-body text-stone-300 hover:text-amber-500 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-24 text-center space-y-4">
        <p className="text-[10px] font-label uppercase tracking-[0.2rem] text-stone-500">
          {copyright}
        </p>
        <p className="text-[10px] font-label uppercase tracking-[0.2rem] text-stone-500">
          <a 
            href="https://www.sshailesh.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-amber-600 transition-colors"
          >
            @ Shailesh 2026
          </a>
        </p>
      </div>
    </footer>
  );
}
