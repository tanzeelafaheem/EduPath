"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { mockUsers } from "../../../public/users";

export default function LoginPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = mockUsers.find(
      (u) =>
        u.email === loginData.email &&
        u.password === loginData.password
    );

    if (!user) {
      alert("Invalid Credentials");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    router.push("/");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      ...signupData,
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    alert("Account Created Successfully");
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-white flex">
      {/* Left Section — Retains your precise original aspect and alignment */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400" />

        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <span className="uppercase tracking-[0.3em] text-sm text-white/80">
            College Discovery Platform
          </span>

          <h1 className="mt-6 text-6xl font-bold leading-tight">
            Discover
            <br />
            Compare
            <br />
            Apply
          </h1>

          <p className="mt-6 max-w-md text-lg text-white/90">
            Explore colleges, compare rankings, placements, fees,
            and courses. Find the perfect college for your future.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="rounded-2xl bg-white/15 backdrop-blur-md p-5">
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-sm text-white/80 mt-1">Colleges</p>
            </div>

            <div className="rounded-2xl bg-white/15 backdrop-blur-md p-5">
              <h2 className="text-3xl font-bold">50K+</h2>
              <p className="text-sm text-white/80 mt-1">Students</p>
            </div>

            <div className="rounded-2xl bg-white/15 backdrop-blur-md p-5">
              <h2 className="text-3xl font-bold">95%</h2>
              <p className="text-sm text-white/80 mt-1">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section — Preserves your screen boundaries layout flawlessly */}
      <div className="flex flex-1 items-center justify-center p-6 bg-slate-50 max-h-screen">
        <div className="w-full max-w-md">
          <div className="rounded-[32px] bg-white p-10 shadow-xl border border-slate-200">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                <FaGraduationCap size={34} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Edupath
                </h3>

                <p className="text-sm text-slate-500">
                  Discover Your Future
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Welcome 👋
              </h2> 

              <p className="mt-2 text-slate-500">
                {activeTab === "login" ? "Sign in to continue your journey." : "Create an account to begin."}
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-8 flex rounded-xl bg-blue-50 p-1">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 rounded-lg py-3 text-sm font-semibold transition ${
                  activeTab === "login"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 rounded-lg py-3 text-sm font-semibold transition ${
                  activeTab === "signup"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form Box Wrapper with an explicit internal min-height to balance the forms */}
            <div className="min-h-[360px] relative">
              {activeTab === "login" ? (
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email
                    </label>

                    <div className="flex items-center rounded-xl border border-slate-300 bg-white px-4 relative">
                      <FiMail className="text-slate-400 z-10" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={loginData.email}
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            email: e.target.value,
                          })
                        }
                        className="w-full p-4 pl-3 outline-none relative z-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Password
                    </label>

                    <div className="flex items-center rounded-xl border border-slate-300 bg-white px-4 relative">
                      <FiLock className="text-slate-400 z-10" />
                      <input
                        type="password"
                        placeholder="Enter password"
                        required
                        value={loginData.password}
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            password: e.target.value,
                          })
                        }
                        className="w-full p-4 pl-3 outline-none relative z-0"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 mt-2"
                  >
                    Sign In
                  </button>
                  <p className="justify-center text-center">Demo credentials: tanzeela@gmail.com / password123</p>
                </form>
              ) : (
                <form onSubmit={handleSignup} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>

                    <div className="flex items-center rounded-xl border border-slate-300 bg-white px-4 relative">
                      <FiUser className="text-slate-400 z-10" />
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        value={signupData.name}
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            name: e.target.value,
                          })
                        }
                        className="w-full p-4 pl-3 outline-none relative z-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email
                    </label>

                    <div className="flex items-center rounded-xl border border-slate-300 bg-white px-4 relative">
                      <FiMail className="text-slate-400 z-10" />
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={signupData.email}
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            email: e.target.value,
                          })
                        }
                        className="w-full p-4 pl-3 outline-none relative z-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Password
                    </label>

                    <div className="flex items-center rounded-xl border border-slate-300 bg-white px-4 relative">
                      <FiLock className="text-slate-400 z-10" />
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        value={signupData.password}
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            password: e.target.value,
                          })
                        }
                        className="w-full p-4 pl-3 outline-none relative z-0"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Create Account
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}