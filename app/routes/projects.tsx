import { MetaFunction } from "@remix-run/react";
import { ProjectWrapper } from "~/components/projects.wrapper";

export const meta: MetaFunction = () => {
  return [{ title: "Projects list" }];
};

export default function Projects() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center border-t border-b border-zinc-700 h-[400px]">
        <div className="text-center md:scale-125">
          <h5>Right now...</h5>
          <h1 className="">What I am building</h1>
        </div>
      </div>
      <ProjectWrapper />
    </main>
  );
}
