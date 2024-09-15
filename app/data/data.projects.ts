import type { IProject } from "./types.ts";

export const projects: IProject[] = [
  {
    title: "Portfolio Website",
    category: "Frontend - Remix",
    url: [
      "https://github.com/faridfirdautama/portfolio-remix",
      "https://farid-utama.vercel.app/",
    ],
    description: [
      "A personal portfolio website with display a small part of biography of me including skills and some certificates I achieved, a list of some project that built including a couple description of the project.",
      "Also a list of hardware that I used including several software to support me in building some projects.",
      "This website was build with Remix and all code following a guide of ESLint also implementing githook by husky prior to publishing to github, and finally it was deployed with Vite & Vercel.",
    ],
    tags: ["Typescript", "Remix", "React", "Tailwind", "Vite", "EsLint"],
  },
  {
    title: "RAWG - List of games",
    category: "iOS app - Consumes API",
    url: ["https://github.com/faridfirdautama/RawgExpertFinal", "#"],
    description: [
      "An iOS application that shows a list of games from RAWG API, the main features is to display a list of games and a user can search a game based on the name.",
      "This app was build with SwiftUI and implement HIG (Human Interface Guidelines) standard, SwiftLint as a code linter, Clean Architecture by VIPER (View, Interactor, Presenter, Entity, Router), Dependency Injection, Modularization, locale database by RealmSwift, reactive programming by Combine, CI/CD by Codemagic, mockup design by Figma.",
    ],
    tags: ["SwiftUI", "RealmSwift", "Combine", "Codemagic"],
  },
  {
    title: "Assignment Submission",
    category: "Fullstack web app",
    url: [
      "https://github.com/faridfirdautama/vite-devscaleAssignmentKw",
      "https://vite-devscale-assignment-kw.vercel.app/",
    ],
    description: [
      "A monolith web application with full CRUD functionality that handling features of submission assignment in some forms input.",
      "This web app uses a backend from appbackend.io ",
    ],
    tags: ["Typescript", "Javascript", "Appbackend.io", "HTML", "CSS", "Vite"],
  },
];
