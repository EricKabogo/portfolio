'use client';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight">
          Eric Kabogo
        </Link>

        <div className="flex items-center gap-2 md:gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {isOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-nav" className="border-t border-border bg-bg md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
