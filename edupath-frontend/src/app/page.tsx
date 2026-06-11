"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/layout/HeroSection";
import Stats from "@/components/layout/Stats";
import Categories from "@/components/layout/Categories";
import FeaturedUniversities from "@/components/layout/FeaturedUniversities";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-slate-50">

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() =>
          setIsSidebarOpen(false)
        }
      />

      <Navbar
  onMenuClick={() =>
    setIsSidebarOpen(true)
  }
/>

      <Hero />

      <Stats />

      <Categories />

      <FeaturedUniversities />

      <Footer />

    </div>
  );
}