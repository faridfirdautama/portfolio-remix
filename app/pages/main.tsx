import { Outlet } from "@remix-run/react";
import { AppFooter } from "~/components/app.footer";
import { AppHeader } from "~/components/app.header";
import { AppHeaderMobile } from "~/components/app.header.mobile";

export default function MainLayout() {
  return (
    <>
      <AppHeader />
      <AppHeaderMobile />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}
