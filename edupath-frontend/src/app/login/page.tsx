"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockUsers } from "@/data/users";

export default function LoginPage() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = mockUsers.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    router.push("/");
  };

  const handleSignup = (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    alert("Mock signup successful");
    setIsLogin(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] grid md:grid-cols-2">

        {/* LEFT PANEL */}

        <div
          className="hidden md:flex relative flex-col justify-between p-12 text-white min-h-[700px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,40,142,0.82), rgba(0,40,142,0.82)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>

            <div className="inline-flex rounded-full bg-white/20 px-4 py-2 backdrop-blur-md">
              Academic Excellence
            </div>

            <h1 className="mt-8 text-6xl font-bold leading-tight">
              Your Future,
              <br />
              Mapped Out.
            </h1>

            <p className="mt-6 max-w-md text-lg text-blue-100">
              Join over 50,000 students finding
              their perfect academic match
              through data-driven insights and
              expert guidance.
            </p>

          </div>

          <div>

            <div className="flex -space-x-3 mb-4">

              <img
                src="https://i.pravatar.cc/100?img=1"
                className="w-12 h-12 rounded-full border-2 border-white"
              />

              <img
                src="https://i.pravatar.cc/100?img=2"
                className="w-12 h-12 rounded-full border-2 border-white"
              />

              <img
                src="https://i.pravatar.cc/100?img=3"
                className="w-12 h-12 rounded-full border-2 border-white"
              />

            </div>

            <p className="text-blue-100">
              Trusted by scholars worldwide
            </p>

          </div>

          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
        </div>

        {/* RIGHT PANEL */}

        <div className="p-10 md:p-14 flex flex-col justify-center">

          <div className="flex mb-10 border-b">

            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 pb-4 font-semibold transition ${
                isLogin
                  ? "border-b-2 border-blue-700 text-blue-700"
                  : "text-gray-500"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 pb-4 font-semibold transition ${
                !isLogin
                  ? "border-b-2 border-blue-700 text-blue-700"
                  : "text-gray-500"
              }`}
            >
              Sign Up
            </button>

          </div>

          {isLogin ? (
            <>
              <h2 className="text-4xl font-bold text-slate-900">
                Welcome Back
              </h2>

              <p className="mt-2 text-slate-500">
                Access your personalized
                college roadmap.
              </p>

              <form
                onSubmit={handleLogin}
                className="mt-8 space-y-5"
              >

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="student@edupath.com"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-700"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="123456"
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800 transition"
                >
                  Login to Dashboard
                </button>

              </form>

              <div className="mt-6 rounded-xl bg-slate-100 p-4">
                <p className="font-semibold mb-2">
                  Demo Credentials
                </p>

                <p>
                  Email:
                  student@edupath.com
                </p>

                <p>Password: 123456</p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-4xl font-bold">
                Start Your Journey
              </h2>

              <p className="mt-2 text-slate-500">
                Create your account
              </p>

              <form
                onSubmit={handleSignup}
                className="mt-8 space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">

                  <input
                    placeholder="First Name"
                    className="rounded-xl border px-4 py-3"
                  />

                  <input
                    placeholder="Last Name"
                    className="rounded-xl border px-4 py-3"
                  />

                </div>

                <input
                  placeholder="Email"
                  className="w-full rounded-xl border px-4 py-3"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border px-4 py-3"
                />

                <button className="w-full rounded-xl bg-blue-700 py-3 text-white font-semibold">
                  Create Account
                </button>

              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}