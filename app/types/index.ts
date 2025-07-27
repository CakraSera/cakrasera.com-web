export type ProjectCategory =
  | "All"
  | "Fullstack"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Learning"
  | "Bootcamp"
  | "Other";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  category: ProjectCategory;
  tags: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  features?: string[];
  technologiesUsed?: string[];
  challenges?: string[];
  learnings?: string[];
  screenshots?: { src: string; alt: string }[];
}
