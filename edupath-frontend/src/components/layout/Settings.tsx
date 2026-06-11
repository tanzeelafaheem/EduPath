"use client";

import {
  User,
  Bell,
  Moon,
  Shield,
  Globe,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Settings() {
   const [user, setUser] = useState(null);
   const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <section className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Settings
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your account preferences and application settings.
          </p>
        </div>

        {/* Profile Card */}

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <User
                size={30}
                className="text-blue-700"
              />
            </div>

            <div>
              <h2 className="font-bold text-xl">
                Tanzeela Faheem
              </h2>

              <p className="text-slate-500">
                tanzeela@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Settings List */}

        <div className="space-y-4">

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">

            <SettingItem
              icon={<User size={20} />}
              title="Edit Profile"
              subtitle="Update your personal information"
            />

            <SettingItem
              icon={<Bell size={20} />}
              title="Notifications"
              subtitle="Manage email and push notifications"
            />

            <SettingItem
              icon={<Moon size={20} />}
              title="Appearance"
              subtitle="Dark mode & theme preferences"
            />

            <SettingItem
              icon={<Globe size={20} />}
              title="Language"
              subtitle="Choose your preferred language"
            />

            <SettingItem
              icon={<Shield size={20} />}
              title="Privacy & Security"
              subtitle="Password and account security"
            />
          </div>

          {/* Logout */}

          <button className="w-full flex items-center justify-center gap-2 bg-red-50 border border-red-200 text-red-600 rounded-2xl py-4 font-semibold hover:bg-red-100 transition"
            onClick={handleLogout}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function SettingItem({
  icon,
  title,
  subtitle,
}: SettingItemProps) {
  return (
    <button className="w-full flex items-center justify-between p-5 hover:bg-slate-50 border-b last:border-b-0 border-slate-100 transition">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700">
          {icon}
        </div>

        <div className="text-left">
          <h3 className="font-semibold text-slate-900">
            {title}
          </h3>

          <p className="text-sm text-slate-500">
            {subtitle}
          </p>
        </div>
      </div>

      <ChevronRight
        size={18}
        className="text-slate-400"
      />
    </button>
  );
}