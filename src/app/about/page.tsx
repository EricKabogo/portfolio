import Image from 'next/image';
import { CodeBracketIcon, RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/solid';

export default function AboutPage() {
  const skills = [
    'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Tailwind CSS', 'Python', 'Docker', 'AWS'
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate software developer dedicated to creating innovative 
            and efficient web solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Profile Image */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/profile.jpg" 
              alt="Your Profile" 
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* About Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
              Hello, I'm [Your Name]
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                I'm a software developer with a passion for building 
                scalable web applications. With a strong background in 
                full-stack development, I love turning complex problems 
                into elegant, user-friendly solutions.
              </p>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  My Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-blue-100 text-blue-800 
                      px-4 py-2 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Attributes */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <CodeBracketIcon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-800">Clean Code</h4>
                <p className="text-sm text-gray-600">
                  Writing maintainable and efficient code
                </p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <RocketLaunchIcon className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <h4 className="font-semibold text-gray-800">Fast Delivery</h4>
                <p className="text-sm text-gray-600">
                  Agile development and timely project completion
                </p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <HeartIcon className="h-12 w-12 mx-auto text-red-600 mb-4" />
                <h4 className="font-semibold text-gray-800">Passion</h4>
                <p className="text-sm text-gray-600">
                  Continuous learning and improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}