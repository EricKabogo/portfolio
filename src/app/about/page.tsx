import Image from 'next/image';

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className="h-12 w-12 mx-auto text-blue-600 mb-4"
    fill="currentColor"
  >
    <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
  </svg>
);

const HeartIcon = () => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="h-12 w-12 mx-auto text-blue-600 mb-4"
      fill="currentColor">
    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
  </svg>
  );

  const RocketIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="h-12 w-12 mx-auto text-blue-600 mb-4"
        fill="currentColor">
<path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>    </svg>
    );

export default function AboutPage() {
  const skills = [
    'TypeScript', 'React', 'Next.js', 'Node.js', 'Nest.js', 
    'Tailwind CSS', 'Python', 'Git', 'Database management', 'Clickup'
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
              Hello, I'm Eric Kabogo
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
                {/* Use the new CodeIcon here */}
                <CodeIcon />
                <h4 className="font-semibold text-gray-800">Clean Code</h4>
                <p className="text-sm text-gray-600">
                  Writing maintainable and efficient code
                </p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <HeartIcon/>
                <h4 className="font-semibold text-gray-800">Fast Delivery</h4>
                <p className="text-sm text-gray-600">
                  Agile development and timely project completion
                </p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <RocketIcon/>
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
