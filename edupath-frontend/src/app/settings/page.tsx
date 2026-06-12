"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import Settings from "@/components/layout/Settings";

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-slate-50">

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
<Navbar
  onMenuClick={() => setIsSidebarOpen(true)}
/>

      <main className="pt-16">
        <Settings />
      </main>

      <Footer />

    </div>
  );
}