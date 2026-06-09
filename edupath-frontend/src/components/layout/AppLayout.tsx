"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} />

        <main
          className={`
            flex-1 p-6 transition-all duration-300
          `}
        >
          <div className="bg-gray-100 rounded-xl min-h-[85vh] p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}