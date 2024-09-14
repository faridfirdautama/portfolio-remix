import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Projects list" }];
};
interface IProject {
  title: string;
  category: string;
  url: { icon: string; uri: string }[];
  description: string;
  stack: string[];
}
const projects: IProject[] = [
  {
    title: "RAWG (List of games)",
    category: "Frontend - Consumes API",
    url: [
      {
        icon: "/MdiGithub.png",
        uri: "https://github.com/faridfirdautama/RawgExpertFinal",
      },
      {
        icon: "/MdiWeb.png",
        uri: "#",
      },
    ],
    description:
      "An iOS application that shows a list of games from RAWG API, user can also search a game based on name. This app was build with SwiftUI and implement HIG (Human Interface Guidelines) standard, SwiftLint as a code linter, Clean Architecture by VIPER (View, Interactor, Presenter, Entity, Router), Dependency Injection, Modularization, locale database by RealmSwift, reactive programming by Combine, CI/CD by Codemagic, mockup design by Figma.",
    stack: ["SwiftUI", "RealmSwift", "Combine", "Codemagic"],
  },
  {
    title: "",
    category: "",
    url: [
      {
        icon: "/MdiGithub.png",
        uri: "https://github.com/faridfirdautama/RawgExpertFinal",
      },
      {
        icon: "/MdiWeb.png",
        uri: "#",
      },
    ],
    description: "",
    stack: ["", ""],
  },
];

export default function Projects() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center border-t border-b border-zinc-700 h-[400px]">
        <div className="text-center md:scale-125">
          <h5>Right now...</h5>
          <h1 className="">What I am building</h1>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10 mb-10 p-10">
        {/* Project Card*/}
        {projects.map((project, index) => (
          <div className="flex flex-col bg-zinc-800 rounded-xl p-4" key={index}>
            <div className="flex items-center justify-between">
              <h4>{project.title}</h4>
              <div className="flex gap-2 text-zinc-400">
                {project.url.map((item, index) => (
                  <a
                    href={item.uri}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    <img
                      width={32}
                      src={item.icon}
                      alt="icon"
                      className="bg-white rounded-full"
                    />
                  </a>
                ))}
              </div>
            </div>
            <p className="dark:text-zinc-400 text-xs">{project.category}</p>
            <p className="dark:text-zinc-400 text-sm">Description :</p>
            <p className="dark:text-zinc-400 text-xs text-justify">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center border-t border-b border-zinc-700 h-[400px]">
        <div className="text-center md:scale-125">
          <h5>In the past...</h5>
          <h1 className="">What I have built</h1>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10 mb-10 p-10">
        <h3>Hardware</h3>
        <p className="dark:text-zinc-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          beatae, mollitia distinctio optio quos officiis reprehenderit minima
          repellat ad molestias et veritatis ducimus? Facilis aut quos minus
          distinctio, assumenda, sunt alias atque corporis vero pariatur
          sapiente iste voluptates sint.
        </p>
        <h3>Software</h3>
        <p className="dark:text-zinc-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          beatae, mollitia distinctio optio quos officiis reprehenderit minima
          repellat ad molestias et veritatis ducimus? Facilis aut quos minus
          distinctio, assumenda, sunt alias atque corporis vero pariatur
          sapiente iste voluptates sint.
        </p>
      </div>
    </main>
  );
}
