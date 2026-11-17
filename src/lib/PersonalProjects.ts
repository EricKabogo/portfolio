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
    title: "ChamaHub",
    description:
      "A shared ledger for chamas (savings groups) that records contributions, loans and payouts. Members pay by M-Pesa, and money only leaves when two officials approve.",
    technologies: ["Next.js", "TypeScript", "M-Pesa"],
    liveLink: "https://chamahub-topaz.vercel.app/",
    imageUrl: "/chamahub.png",
  },
  {
    id: 2,
    title: "Carhoot App",
    description:
      "A marketplace for buying and selling cars in Kenya, with local and import listings searchable by make and model.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi CMS"],
    liveLink: "https://carhoot.app",
    imageUrl: "/carhoot.png",
  },
  {
    id: 3,
    title: "Akira Care",
    description:
      "The website for a family wellness practice in Nairobi, where patients browse services and care programmes and book appointments.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi CMS"],
    liveLink: "https://akiracare.ke",
    imageUrl: "/akira.png",
  },
];

export default PersonalProjects;
