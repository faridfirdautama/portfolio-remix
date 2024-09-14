import { MetaFunction } from "@remix-run/react";
import { hardwares } from "~/data/data";
import { softwares } from "~/data/data";

export const meta: MetaFunction = () => {
  return [{ title: "Gear uses" }];
};

export default function Uses() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center border-t border-b border-zinc-700 h-[400px]">
        <div className="text-center md:scale-125">
          <h5>Here the list of...</h5>
          <h1 className="">My Favorite Gear</h1>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10 mb-10 p-10">
        <h3>Hardware</h3>
        {hardwares.map((item, index) => (
          <ul className="dark:text-zinc-400" key={index}>
            <li className="font-bold italic dark:text-teal-500">{item.unit}</li>
            <li>⌖ {item.specs}</li>
          </ul>
        ))}
        <h3 className="mt-10">Software</h3>
        {softwares.map((item, index) => (
          <ul className="dark:text-zinc-400" key={index}>
            <li className="font-bold italic dark:text-teal-500">
              {item.category}
            </li>
            {item.list.map((list, index) => (
              <li key={index}>⌖ {list}</li>
            ))}
          </ul>
        ))}
      </div>
    </main>
  );
}
