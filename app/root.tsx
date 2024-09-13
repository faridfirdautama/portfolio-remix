import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css?url";

import type { LinksFunction } from "@remix-run/node";
import { AppHeader } from "./components/app.header";
import { AppHeaderMobile } from "./components/app.header.mobile";
import { AppFooter } from "./components/app.footer";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="max-w-[1300px] mx-auto font-sans p-4 bg-white text-black dark:bg-black dark:text-white">
        <AppHeader />
        <AppHeaderMobile />
        {children}
        <ScrollRestoration />
        <Scripts />
        <AppFooter />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
