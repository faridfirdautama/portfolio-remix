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
      "Responsive to mobile view, an implementing both Dark or Light themes triggered by your system's themes.",
    ],
    tags: [
      "Typescript",
      "Remix",
      "React",
      "Tailwind",
      "Vite",
      "EsLint",
      "Dark mode",
      "Responsive",
    ],
  },
  {
    title: "RAWG - List of games",
    category: "iOS app - Consumes API",
    url: ["https://github.com/faridfirdautama/RawgExpertFinal", "#"],
    description: [
      "An iOS application that shows a list of games from RAWG API, the main features is to display a list of games and a user can search a game based on the name.",
      "This app was build with SwiftUI and implement HIG (Human Interface Guidelines) standard, SwiftLint as a code linter, Clean Architecture by VIPER (View, Interactor, Presenter, Entity, Router), Dependency Injection, Modularization, locale database by RealmSwift, reactive programming by Combine, CI/CD by Codemagic, mockup design by Figma.",
    ],
    tags: [
      "SwiftUI",
      "RealmSwift",
      "Combine",
      "Codemagic",
      "Clean Architecture",
      "VIPER",
      "Modularization",
      "HIG",
    ],
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
      "This web app uses a backend from appbackend.io, responsive to mobile view, also implement both themes Light and Dark automatically by your system themes. ",
      "As an assignment submission on Devscale Indonesia - Immersive Fullstack Javascript Bootcamp, chapter Backend with expressJS and Vite",
    ],
    tags: [
      "Typescript",
      "Javascript",
      "Appbackend.io",
      "HTML",
      "CSS",
      "Vite",
      "Dark mode",
      "Responsive",
    ],
  },
  {
    title: "Forum App",
    category: "Backend - Microservices",
    url: [
      "https://github.com/mentekis/",
      "http://103.52.114.161:3000/api/v1/users",
    ],
    description: [
      "A Forum App designed with microservices architecture consist of 5 services: Api-gateway, Users, Threads, Replies, Notifications. All incoming client request handling by Api-gateway & screening for user authentication and authorization with token rotation system.",
      "Implementing event bus with RabbitMQ for message broker when new reply successfully created, new user update data, and new thread created.",
    ],
    tags: [
      "Microservices",
      "Typescript",
      "ExpressJS",
      "MongoDB",
      "RabbitMQ",
      "Docker",
      "JWT",
      "Bcrypt",
      "Zod",
    ],
  },
];
