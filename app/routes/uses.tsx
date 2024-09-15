import { MetaFunction } from "@remix-run/react";
import { HardwareWrapper } from "~/components/uses.hardware";
import { SoftwareWrapper } from "~/components/uses.software";

export const meta: MetaFunction = () => {
  return [{ title: "Gear uses" }];
};

export default function Uses() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center border-t border-b border-zinc-700  h-[250px] md:h-[400px]">
        <div className="text-center md:scale-125">
          <h5>Here the list of...</h5>
          <h1 className="">My Favorite Gear</h1>
        </div>
      </div>
      <HardwareWrapper />
      <SoftwareWrapper />
    </main>
  );
}
