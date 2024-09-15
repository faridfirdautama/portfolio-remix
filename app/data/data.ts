import { IMenu } from "./types";
import { IHardware, ISoftware } from "./types";

// MENU
export const menus: IMenu[] = [
  { url: "/", label: "Home" },
  { url: "/projects", label: "Projects" },
  { url: "/uses", label: "Uses" },
];

// SKILLS
export const languages: string[] = ["Javascript", "Typescript", "Swift"];
export const technologies: string[] = [
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

// GEAR
export const hardwares: IHardware[] = [
  {
    unit: "Laptop",
    specs: "MacBook Air M1 2020 | 8GB RAM | 256GB SSD",
  },
  {
    unit: "Keyboard",
    specs: "Royal Kludge RK837 - Mechanical Keyboard 65% layout",
  },
  {
    unit: "Mouse",
    specs: "Rexus ARKA RX-107 - Wireless Gaming Mouse",
  },
];

export const softwares: ISoftware[] = [
  {
    category: "CLI - Terminal tools",
    list: ["Iterm2 + tmux"],
  },
  {
    category: "IDE - Code editor",
    list: ["NeoVim", "VSCode", "Xcode", "JetBrains IDEs"],
  },
  {
    category: "Design tools",
    list: ["Figma", "Adobe Photoshop"],
  },
  {
    category: "DevOps",
    list: ["Jenkins", "Github Action", "Docker", "Kubernetes"],
  },
  {
    category: "Http request tools",
    list: ["Postman", "Thunder Client"],
  },
  {
    category: "Documentation",
    list: ["Notion", "Github", "TLDraw"],
  },
];
