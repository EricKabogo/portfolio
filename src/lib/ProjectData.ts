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
      githubLink: "https://github.com/EricKabogo/portfolio",
      liveLink: "https://portfolio-sigma-eight-24.vercel.app/",
      imageUrl: "/portfolio.png"
    },
    {
      id: 2,
      title: "Hotel Menu Website",
      description: "A simple menu page displaying a list of products, their descriptions and prices.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/EricKabogo/Menu-Page",
      imageUrl: "/projects/ecommerce.png"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "A simplified financial dashboard that has a public home page, a login page, dashboard pages that are protected by authentication and the ability for users to add, edit, and delete invoices.",
      technologies: ["Next.js", "TypeScript", "React", "PostgreSQL",],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://your-ecommerce-site.com",
      imageUrl: "/projects/ecommerce.png"
    }
  ];

  export default projects;