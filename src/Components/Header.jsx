import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="w-full flex items-center border border-gray-500">
      <div className="w-full flex items-center justify-between mx-40 p-4">

        <div className="flex gap-4 text-xl items-center">

          <span className="bg-[#6366f1] w-8 h-8 flex items-center justify-center rounded-md text-white font-extrabold">
            J
          </span>

          <span className="font-bold">JobBoard</span>

          {/* Browse */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#6366f1] p-1 flex items-center justify-center rounded-md text-white"
                : "text-gray-600 hover:text-black"
            }
          >
            Browse
          </NavLink>

          {/* Saved */}
          <NavLink
            to="/saved"
            className={({ isActive }) =>
              isActive
                ? "bg-[#6366f1] p-1 flex items-center justify-center rounded-md text-white"
                : "text-gray-600 hover:text-black"
            }
          >
            Saved(0)
          </NavLink>

        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z" />
          </svg>
        </div>

      </div>
    </div>
  );
}

export default Header;