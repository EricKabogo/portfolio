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
      liveLink: "https://your-ecommerce-site.com",
      imageUrl: "/portfolio.png"
    },
    {
      id: 2,
      title: "Hotel Menu Website",
      description: "A simple menu page displaying a list of products, their descriptions and prices.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/EricKabogo/Menu-Page",
      imageUrl: "/projects/ecommerce.png"
    }
    // Add more projects here
  ];
  
  export default projects;