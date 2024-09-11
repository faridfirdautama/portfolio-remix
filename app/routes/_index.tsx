import type { MetaFunction } from "@remix-run/node";
import { AppHeader } from "~/components/app.header";

export const meta: MetaFunction = () => {
  return [
    { title: "Farid F. Utama" },
    {
      name: "Personal website",
      content: "Personal website of farid-utama.my.id",
    },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <AppHeader />
    </div>
  );
}
