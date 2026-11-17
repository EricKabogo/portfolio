'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `font-semibold transition-colors hover:text-blue-600 ${
      pathname === href ? 'text-blue-600' : 'text-gray-800'
    }`;

  return (
    <header className="relative bg-white border-b border-gray-200 p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto py-2">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Eric Kabogo
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          className="md:hidden font-semibold text-gray-800 rounded px-2 py-1"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={linkClass(item.href)}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="absolute top-full left-0 z-20 w-full bg-white border-b border-gray-200 shadow-md md:hidden"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={linkClass(item.href)}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
