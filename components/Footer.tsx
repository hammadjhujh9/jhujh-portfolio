"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hammad@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Hammad Tufail. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

