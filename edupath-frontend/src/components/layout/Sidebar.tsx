"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "College Search", href: "/search" },
  { name: "Saved", href: "/saved" },
  { name: "Compare", href: "/compare" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          EduPath
        </h1>
      </div>

      <nav className="px-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-3 rounded-lg mb-2 ${
              pathname === link.href
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}