import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Profile Image */}
        <div className="w-64 h-64 relative">
          <Image 
            src="/profile.jpg" 
            alt="My Profile" 
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Hi, I'm Eric Kabogo
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Software Developer | Tech Enthusiast | Problem Solver
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <Link 
              href="/projects" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg 
              flex items-center justify-center space-x-2 hover:bg-blue-700 
              transition-colors group"
            >
              <span>View My Projects</span>
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact" 
              className="border-2 border-blue-600 text-blue-600 
              px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}