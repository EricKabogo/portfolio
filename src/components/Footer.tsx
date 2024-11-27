import Link from 'next/link';
import { 
  GitHubLogoIcon, 
  LinkedInLogoIcon, 
  TwitterLogoIcon 
} from '@radix-ui/react-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <Link 
            href="https://github.com/yourusername" 
            target="_blank" 
            className="hover:text-gray-300 transition-colors"
          >
            <GitHubLogoIcon className="h-6 w-6" />
          </Link>
          <Link 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            className="hover:text-gray-300 transition-colors"
          >
            <LinkedInLogoIcon className="h-6 w-6" />
          </Link>
          <Link 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            className="hover:text-gray-300 transition-colors"
          >
            <TwitterLogoIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}