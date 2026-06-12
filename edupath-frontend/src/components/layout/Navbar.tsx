"use client";

import { Menu, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({
  onMenuClick,
}: NavbarProps) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100"
          >
            <Menu size={22} />
          </button>

          <h1 className="text-xl font-bold text-blue-700">
            EduPath
          </h1>
        </div>

        {!user ? (
          <div className="flex gap-3 bg-blue-600 rounded-2xl px-4 py-2 cursor-pointer hover:bg-blue-700">
            <Link href="/login">
              <button className="font-medium text-white cursor-pointer">
                Login / Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">

            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{user.name}</span>
            </div>



          </div>
        )}
      </div>
    </header>
  );
}