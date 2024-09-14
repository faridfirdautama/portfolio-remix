import { IMenu } from "./types";

const languages: string[] = ["Javascript", "Typescript", "Swift"];
const technologies: string[] = [
  "CSS",
  "Tailwind",
  "NVIM",
  "VSCode",
  "React",
  "Next",
  "Remix",
  "Storybook",
  "Github Action",
  "Jenkins",
  "Docker",
  "Kubernetes",
  "SwiftUI",
];

const menus: IMenu[] = [
  { url: "/", label: "About" },
  { url: "/projects", label: "Projects" },
  { url: "/uses", label: "Uses" },
];

export { languages, technologies, menus };
