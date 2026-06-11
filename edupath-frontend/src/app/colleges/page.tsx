"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import Colleges from "@/components/college/colleges";

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
        isLoggedIn={false}
        onMenuClick={() => setIsSidebarOpen(true)}
      />

      <main className="pt-16">
        <Colleges />
      </main>

      <Footer />

    </div>
  );
}