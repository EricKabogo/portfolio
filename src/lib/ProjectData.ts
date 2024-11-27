export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    imageUrl: string;
  }
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Responsive personal portfolio built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/portfolio",
      imageUrl: "/projects/portfolio.png"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://your-ecommerce-site.com",
      imageUrl: "/projects/ecommerce.png"
    }
    // Add more projects here
  ];
  
  export default projects;