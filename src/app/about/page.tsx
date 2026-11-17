import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  const skills = [
    'TypeScript', 'React', 'Next.js', 'Node.js', 'Nest.js', 
    'Tailwind CSS', 'Python', 'Git', 'Database management', 'Clickup'
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Full-stack developer based in Nairobi, Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Profile Image */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/profile.jpg" 
              alt="Portrait of Eric Kabogo" 
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* About Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
              Hello, I&apos;m Eric Kabogo
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                I am a software developer with a passion for building 
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

          </div>
        </div>
      </div>
    </div>
  );
}
