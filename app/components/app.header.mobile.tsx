import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import { useState } from "react";
import { menus } from "~/data/data";

export const AppHeaderMobile = () => {
  const [closed, setClosed] = useState(true);

  const onClose = () => setClosed(true);
  const onToggle = () => setClosed(!closed);

  const renderNavigation = () => {
    return (
      <nav className="absolute left-0 right-0 backdrop-blur-md bg-zinc-50/70 text-lg dark:bg-zinc-950/50 p-10 h-full flex flex-col items-center gap-4 z-10 md:flex-row md:hidden">
        {menus.map((menu, index) => {
          return (
            <NavLink
              to={menu.url}
              key={index}
              onClick={onClose}
              className="hover:text-teal-600 dark:hover:text-teal-500 hover:scale-125 transform duration-300 ml-4 gap-2 px4 md:hidden"
            >
              {menu.label}
            </NavLink>
          );
        })}
      </nav>
    );
  };

  return (
    <header
      className={classNames("header overflow-hidden print:hidden md:block", {
        closed,
      })}
    >
      <div className="flex mb-4 h-12 w-full items-center md:text-sm md:hidden">
        <button
          className="md:hidden"
          onClick={onToggle}
          title="Toggle Menu"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9 19v-2h12v2zm0-6v-2h12v2zm0-6V5h12v2zM5 20q-.825 0-1.412-.587T3 18t.588-1.412T5 16t1.413.588T7 18t-.587 1.413T5 20m0-6q-.825 0-1.412-.587T3 12t.588-1.412T5 10t1.413.588T7 12t-.587 1.413T5 14m0-6q-.825 0-1.412-.587T3 6t.588-1.412T5 4t1.413.588T7 6t-.587 1.413T5 8"
            />
          </svg>
        </button>
        <div className="flex-1" />

        <NavLink className="ml-2 md:hidden" to="/">
          <img
            width="42"
            src="/my_logo.jpg"
            alt="logo"
            className="rounded-full"
          />
          <span className="sr-only">Home</span>
        </NavLink>
        <div className="flex-1 pl-12" />
      </div>

      <div className="h-full font-font-monospace md:flex-row md:hidden">
        {!closed && renderNavigation()}
      </div>
    </header>
  );
};
