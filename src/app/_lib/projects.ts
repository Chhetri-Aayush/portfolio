type Project = {
  name: string;
  description: string;
  techStack: string[];
};

export const projects: Project[] = [
  {
    name: "typing test",
    description:
      "Interactive typing speed test application with real-time statistics and performance tracking.",
    techStack: [
      "React,",
      "Typescript,",
      "Tailwind,",
      "Zustand,",
      "Bun,",
      "Hono,",
      "Postgres.",
    ],
  },

  {
    name: "conect-core",
    description:
      "A fully featured social media backend built with secure authentication, user profiles, posts, comments, likes, and follow systems.",
    techStack: ["Node,", "Express,", "MongoDB,", "Multer."],
  },
  {
    name: "Eventify",
    description:
      "A responsive event management frontend that allows users to browse events, register, manage tickets, and view schedules with a clean UI.",
    techStack: ["React,", "Javascript,", "Bootstrap."],
  },
];
