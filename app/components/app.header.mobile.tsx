import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import { useState } from "react";

export const AppHeaderMobile = () => {
  const [closed, setClosed] = useState(true);

  const onClose = () => setClosed(true);
  const onToggle = () => setClosed(!closed);

  const renderNavigation = () => {
    return (
      <nav className="mt-14 flex flex-col items-center gap-4 md:flex-row">
        <NavLink className="header-logo" to="/" onClick={onClose}>
          Home
        </NavLink>
        <NavLink className="header-logo" to="/" onClick={onClose}>
          About
        </NavLink>
        <NavLink className="header-logo" to="/" onClick={onClose}>
          Projects
        </NavLink>
      </nav>
    );
  };

  return (
    <header
      className={classNames(
        "header overflow-hidden print:hidden md:block",
        { closed },
        "dark"
      )}
    >
      <div className="flex h-14 w-full items-center md:text-sm">
        <button
          className="header-logo ml-4 gap-2 px4 md:hidden"
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
          </svg>
        </button>
        <div className="flex-1 md:hidden" />

        <NavLink className="header-logo ml-4 gap-2 px-4" to="/">
          <span className="sr-only">Home</span>
        </NavLink>
        <div className="flex-1 pl-20" />
      </div>

      <div className="h-full font-font-monospace md:flex-row">
        {!closed && renderNavigation()}
      </div>
    </header>
  );
};
