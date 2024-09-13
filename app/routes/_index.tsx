import type { MetaFunction } from "@remix-run/node";
import About from "./about";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | FFU" },
    {
      name: "Personal website",
      content: "Personal website of farid-utama.my.id",
    },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <About />
    </div>
  );
}
