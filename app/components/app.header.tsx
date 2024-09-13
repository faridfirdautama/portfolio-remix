import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import { useState } from "react";

export const AppHeader = () => {
  const [closed, setClosed] = useState(true);

  const onClose = () => setClosed(true);
  const onToggle = () => setClosed(!closed);
  return (
    <header
      className={classNames(
        "header hidden overflow-hidden print:hidden md:block",
        { closed }
      )}
    >
      <div className="mx-auto mb-4 flex h-full w-full max-w-5xl items-center justify-evenly md:text-sm">
        <button
          className=" ml-4 gap-2 px-4 md:hidden"
          onClick={onToggle}
          title="Toggle Menu"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9 19v-2h12v2zm0-6v-2h12v2zm0-6V5h12v2zM5 20q-.825 0-1.412-.587T3 18t.588-1.412T5 16t1.413.588T7 18t-.587 1.413T5 20m0-6q-.825 0-1.412-.587T3 12t.588-1.412T5 10t1.413.588T7 12t-.587 1.413T5 14m0-6q-.825 0-1.412-.587T3 6t.588-1.412T5 4t1.413.588T7 6t-.587 1.413T5 8"
            />
            button
          </svg>
        </button>
        <div className="flex-1 md:hidden" />

        <NavLink className=" ml-4 gap-2 px-4" to="/">
          <img
            width="42"
            src="/my_logo.jpg"
            alt="logo"
            className="rounded-full"
          />
          <span className="sr-only">Home</span>
        </NavLink>
        <div className="flex-1" />

        <nav className="flex h-full flex-col gap-10 mr-6 font-sans-bold text-lg md:flex-row">
          <NavLink
            className="hover:text-teal-500 hover:scale-110 duration-300"
            onClick={onClose}
            prefetch="intent"
            to="/"
          >
            About
          </NavLink>
          |
          <NavLink
            className="hover:text-teal-500 hover:scale-110 duration-300"
            onClick={onClose}
            prefetch="intent"
            to="/projects"
          >
            Projects
          </NavLink>
          |
          <NavLink
            className="hover:text-teal-500 hover:scale-110 duration-300"
            onClick={onClose}
            prefetch="intent"
            to="/uses"
          >
            Uses
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
