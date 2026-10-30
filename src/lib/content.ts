import Mycontac from "@/assets/mycontact.png";
import Showtime from "@/assets/moovie.png";
import Portfolio from "@/assets/portfolio.png";

export const navLinks = [
  { index: "01", label: "À propos", href: "#about" },
  { index: "02", label: "Projets", href: "#projects" },
  { index: "03", label: "Compétences", href: "#skills" },
  { index: "04", label: "Contact", href: "#contact" },
] as const;

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "My Contacts",
    category: "Développement web",
    description:
      "Créer une plateforme centralisée pour rassembler tous les contacts de l’utilisateur. L’objectif : permettre d’obtenir et de stocker tous les détails concernant les individus avec lesquels il interagit, facilitant ainsi la gestion de ses relations personnelles et professionnelles.",
    image: Mycontac,
    tags: ["Vue.js", "Tailwind CSS", "API REST"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Show Time",
    category: "Full-Stack",
    description:
      "Application web permettant aux utilisateurs de consulter des films, lire des descriptions, voir des notes et partager leurs avis. Un espace administrateur permet d’ajouter de nouveaux films et de gérer les critiques publiées.",
    image: Showtime,
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "MongoDB", "Figma"],
    liveUrl: "https://movies-zeta-eight-84.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio personnel",
    category: "Design UI/UX",
    description:
      "Conception et développement d’un site web portfolio mettant en valeur mes projets et compétences : architecture du site, design de l’interface, optimisation de l’expérience utilisateur et adaptation aux différents écrans.",
    image: Portfolio,
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Clone de Trello mobile",
    category: "Développement mobile",
    description:
      "Reproduire les principales fonctionnalités de Trello dans une application mobile, avec un focus particulier sur l’ergonomie, la simplicité d’utilisation et l’organisation des tâches.",
    image: "https://www.bluecatreports.com/blog/trello-vs-slack/trello-mobile-app.webp",
    tags: ["React Native", "Expo", "NativeWind"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

type SkillLevel = "Principal" | "Régulier" | "En pratique";

export const skillCategories: Array<{
  title: string;
  skills: Array<{ name: string; level: SkillLevel }>;
}> = [
  {
    title: "Front-end",
    skills: [
      { name: "React", level: "Principal" },
      { name: "React Native (Expo)", level: "Principal" },
      { name: "Next.js", level: "Régulier" },
      { name: "Tailwind CSS", level: "Principal" },
      { name: "Vue.js", level: "Régulier" },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "Node.js", level: "Régulier" },
      { name: "Python", level: "Régulier" },
      { name: "Laravel", level: "Régulier" },
      { name: "TypeScript", level: "Régulier" },
      { name: "REST APIs", level: "Principal" },
    ],
  },
  {
    title: "Outils & infrastructure",
    skills: [
      { name: "Figma", level: "Régulier" },
      { name: "Git", level: "Principal" },
      { name: "Docker", level: "Régulier" },
      { name: "AWS", level: "En pratique" },
      { name: "Swagger / OpenAPI", level: "Régulier" },
    ],
  },
];

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export type Technology = { name: string; icon: string; invert?: boolean };

export const technologies: Technology[] = [
  { name: "JavaScript", icon: devicon("javascript/javascript-original.svg") },
  { name: "TypeScript", icon: devicon("typescript/typescript-original.svg") },
  { name: "React", icon: devicon("react/react-original.svg") },
  { name: "Node.js", icon: devicon("nodejs/nodejs-original.svg") },
  { name: "Vue.js", icon: devicon("vuejs/vuejs-original.svg") },
  { name: "PHP", icon: devicon("php/php-original.svg") },
  { name: "Python", icon: devicon("python/python-original.svg") },
  { name: "NestJS", icon: devicon("nestjs/nestjs-original.svg") },
  { name: "Laravel", icon: devicon("laravel/laravel-original.svg") },
  { name: "Next.js", icon: devicon("nextjs/nextjs-original.svg"), invert: true },
  { name: "Tailwind", icon: devicon("tailwindcss/tailwindcss-original.svg") },
  { name: "Expo", icon: devicon("expo/expo-original.svg"), invert: true },
  { name: "Express", icon: devicon("express/express-original.svg"), invert: true },
  { name: "PostgreSQL", icon: devicon("postgresql/postgresql-original.svg") },
  { name: "MongoDB", icon: devicon("mongodb/mongodb-original.svg") },
  { name: "Docker", icon: devicon("docker/docker-original.svg") },
  { name: "MySQL", icon: devicon("mysql/mysql-original.svg") },
  { name: "Postman", icon: devicon("postman/postman-original.svg") },
  { name: "Git", icon: devicon("git/git-original.svg") },
  { name: "Figma", icon: devicon("figma/figma-original.svg") },
  { name: "AWS", icon: devicon("amazonwebservices/amazonwebservices-original.svg") },
  { name: "GraphQL", icon: devicon("graphql/graphql-plain.svg") },
  { name: "Redis", icon: devicon("redis/redis-original.svg") },
  { name: "Linux", icon: devicon("linux/linux-original.svg") },
];

export const stats = [
  { value: "2+", label: "Années d’expérience" },
  { value: "17+", label: "Projets réalisés" },
];

export const highlights = [
  {
    title: "Code propre",
    description:
      "Des bases lisibles et maintenables : typage, découpage net des responsabilités, revue avant livraison.",
  },
  {
    title: "Design assumé",
    description:
      "Des interfaces qui ont une intention — hiérarchie, mouvement, détails — pas seulement des composants empilés.",
  },
  {
    title: "Curiosité technique",
    description:
      "Veille continue sur l’écosystème front-end, la performance et les pratiques d’accessibilité.",
  },
];
