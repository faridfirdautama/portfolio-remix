import type { IProject } from "./types.ts";

export const projects: IProject[] = [
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
    title: "",
    category: "",
    url: ["", ""],
    description: [""],
    tags: ["", ""],
  },
];
