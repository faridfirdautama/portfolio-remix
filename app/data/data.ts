import { IMenu, ICertificate, IHardware, ISoftware } from "./types";

// MENU
export const menus: IMenu[] = [
  { url: "/", label: "Home" },
  { url: "/projects", label: "Projects" },
  { url: "/uses", label: "Uses" },
];

// CERTIFICATES
export const certificates: ICertificate[] = [
  {
    url: "https://www.dicoding.com/certificates/98XW2OLM9PM3",
    title: "iOS Developer",
    company: "Dicoding Indonesia",
  },
  {
    url: "https://www.dicoding.com/certificates/QLZ97M0V9P5D",
    title: "DevOps CI / CD",
    company: "Dicoding Indonesia",
  },
  {
    url: "https://www.dicoding.com/certificates/KEXL821O4ZG2",
    title: "Microservices Architecture",
    company: "Dicoding Indonesia",
  },
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
