export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    imageUrl: string;
  }
  
  const PersonalProjects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Responsive personal portfolio built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/EricKabogo/portfolio",
      liveLink: "https://portfolio-sigma-eight-24.vercel.app/",
      imageUrl: "/portfolio.png"
    },
    {
      id: 2,
      title: "Carhoot App",
      description: "A responsive site that makes the process of finding a new car easier",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi CMS"],
      liveLink: "https://carhoot.app",
      imageUrl: "/carhoot.png"
    },
    {
      id: 3,
      title: "Akira Care",
      description: "A responsive site that makes the process of finding and booking appointments with a doctor easier.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi CMS"],
      liveLink: "https://akiracare.ke",
      imageUrl: "/akira.png"
    },
    {
      id: 4,
      title: "Hotel Menu Website",
      description: "A simple menu page displaying a list of products, their descriptions and prices.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/EricKabogo/Menu-Page",
      imageUrl: "/menu-page.png"
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description: "A simplified financial dashboard that has CRUD functionalities.",
      technologies: ["Next.js", "TypeScript", "React", "PostgreSQL",],
      githubLink: "https://github.com/yourusername/ecommerce",
      // liveLink: "https://your-ecommerce-site.com",
      imageUrl: "/projects/ecommerce.png"
    }
  ];

  export default PersonalProjects;