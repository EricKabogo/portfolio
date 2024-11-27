import Image from 'next/image';
import Link from 'next/link';

// Inline SVG ArrowRightIcon
const ArrowRightIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="h-5 w-5 group-hover:translate-x-1 transition-transform"
  >
    <path 
      fillRule="evenodd" 
      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" 
      clipRule="evenodd" 
    />
  </svg>
);

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
              <ArrowRightIcon />
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