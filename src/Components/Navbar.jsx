import React from 'react';
import { useState } from "react";
import { NavLink } from "react-router";




const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div className=" bg-black text-white">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex w-full bg-[#05070d] border-b border-white/5 px-6 py-4 items-center justify-between shadow-lg">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold tracking-wide">
            Movie<span className="text-red-500">Verse</span>
          </h1>

          <div className="flex items-center gap-8 text-sm font-medium text-gray-300">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-white transition duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-white transition duration-300"
              }
            >
              Wishlist
            </NavLink>
          </div>
        </div>

        <div className="flex-1 flex justify-center px-6">
          <div className="w-full max-w-xl relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full bg-[#0d111c] border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m0 0A7.65 7.65 0 1 0 5.85 5.85a7.65 7.65 0 0 0 10.8 10.8Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="w-10 h-10 rounded-full bg-[#0d111c] border border-white/10 flex items-center justify-center hover:bg-[#151b2b] transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m14.364 6.364-1.06-1.06M7.757 7.757 6.697 6.697m10.606 0-1.06 1.06M7.757 16.243l-1.06 1.06M12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Z"
              />
            </svg>
          </button>

          <button className="w-10 h-10 rounded-full bg-[#0d111c] border border-white/10 flex items-center justify-center hover:bg-[#151b2b] transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden w-full bg-[#05070d] border-b border-white/5 px-4 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <h1 className="text-2xl font-bold tracking-wide">
            Movie<span className="text-red-500">Verse</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m0 0A7.65 7.65 0 1 0 5.85 5.85a7.65 7.65 0 0 0 10.8 10.8Z"
              />
            </svg>
          </button>

          <button className="w-10 h-10 rounded-full bg-[#0d111c] border border-white/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Routes */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b0f18] border-b border-white/10 px-5 py-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block text-red-500"
                : "block text-gray-300 hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "block text-red-500"
                : "block text-gray-300 hover:text-white transition"
            }
          >
            Wishlist
          </NavLink>
        </div>
      )}
    </div>
    );
};

export default Navbar;






    


