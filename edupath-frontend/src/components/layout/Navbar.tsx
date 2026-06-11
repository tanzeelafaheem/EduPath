"use client";

import { Menu, User } from "lucide-react";

interface NavbarProps {
  isLoggedIn: boolean;
  onMenuClick: () => void;
}

export default function Navbar({
  isLoggedIn,
  onMenuClick,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition"
          >
            <Menu size={22} />
          </button>

          <h1 className="text-xl font-bold text-blue-700">
            EduPath
          </h1>
        </div>

        {!isLoggedIn ? (
          <div className="flex gap-3">
            <button className="font-medium text-slate-600">
              Login
            </button>

            <button className="rounded-xl bg-blue-700 px-4 py-2 text-white">
              Sign Up
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>Tanzeela</span>
          </div>
        )}
      </div>
    </header>
  );
}