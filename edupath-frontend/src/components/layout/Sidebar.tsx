"use client";
import Link from "next/link";
import {
  Home,
  GraduationCap,
  Bookmark,
  ArrowLeftRight,
  Settings,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  const navItems = [
  {
    label: "Home",
    href: "/",
    icon: <Home size={20} />,
  },
  {
    label: "College Search",
    href: "/colleges",
    icon: <GraduationCap size={20} />,
  },
  {
    label: "Saved",
    href: "/saved",
    icon: <Bookmark size={20} />,
  },
  {
    label: "Compare",
    href: "/compare",
    icon: <ArrowLeftRight size={20} />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <Settings size={20} />,
  },
];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`
        fixed left-0 top-0 z-50 h-screen w-72
        bg-white border-r border-slate-100
        transition-transform duration-300
        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
      `}
      >
        <div className="p-6">

          <h2 className="text-2xl font-bold text-blue-700 mb-10">
            EduPath
          </h2>

          <ul className="space-y-2">
            {navItems.map((item) => (
             <li key={item.label}>
  <Link
    href={item.href}
    onClick={onClose}
    className="flex w-full items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 transition"
  >
    {item.icon}
    <span>{item.label}</span>
  </Link>
</li>
            ))}
          </ul>

        </div>
      </aside>
    </>
  );
}