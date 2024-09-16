import { MetaFunction } from "@remix-run/react";
import { ProjectWrapper } from "~/components/projects.wrapper";

export const meta: MetaFunction = () => {
  return [{ title: "Projects list" }];
};

export default function Projects() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center border-t border-b border-zinc-700 h-[350px] md:h-[400px]">
        <div className="text-center md:scale-125 md:text-right md:mr-10">
          <h5>Right now...</h5>
          <h1>What I am building</h1>
        </div>
        <div className="flex flex-col justify-center items-center h-[108px] w-[108px] bg-teal-500 rounded-full md:scale-125">
          <img
            width={100}
            className="rounded-full "
            src="/code.png"
            alt="gear"
          />
        </div>
      </div>
      <ProjectWrapper />
    </main>
  );
}
