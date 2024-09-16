import { MetaFunction } from "@remix-run/react";
import { HardwareWrapper } from "~/components/uses.hardware";
import { SoftwareWrapper } from "~/components/uses.software";

export const meta: MetaFunction = () => {
  return [{ title: "Gear uses" }];
};

export default function Uses() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center border-t border-b border-zinc-700  h-[350px] md:h-[400px]">
        <div className="text-center md:scale-125 md:text-right md:mr-10">
          <h5>Here the list of...</h5>
          <h1 className="">My Favorite Gear</h1>
        </div>
        <div className="flex flex-col justify-center items-center h-[108px] w-[108px] bg-teal-500 rounded-full md:scale-125">
          <img
            width={100}
            className="rounded-full "
            src="/gear.png"
            alt="gear"
          />
        </div>
      </div>
      <HardwareWrapper />
      <SoftwareWrapper />
    </main>
  );
}
