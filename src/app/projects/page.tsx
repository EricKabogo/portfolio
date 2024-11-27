import Image from 'next/image';
import Link from 'next/link';
import PersonalProjects, { Project } from '@/lib/PersonalProjects';

export default function ProjectsPage() {
  return (
    <div className=" bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#002270]">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PersonalProjects.map((project: Project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden
              transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-blue-100 text-blue-800 
                      px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <Link 
                      href={project.githubLink} 
                      target="_blank"
                      className="bg-gray-800 text-white 
                      px-4 py-2 rounded-lg hover:bg-gray-700 
                      transition-colors"
                    >
                      GitHub
                    </Link>
                  )}
                  {project.liveLink && (
                    <Link 
                      href={project.liveLink} 
                      target="_blank"
                      className="border-2 border-blue-600 
                      text-blue-600 px-4 py-2 rounded-lg 
                      hover:bg-blue-50 transition-colors"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}