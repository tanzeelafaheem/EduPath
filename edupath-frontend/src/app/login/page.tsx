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
      alert("Invalid Credentials");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Login Successful");

    router.push("/");
  };

  const handleSignup = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    alert(
      "Signup successful (mock functionality)"
    );

    setIsLogin(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">

      <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-xl grid md:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="hidden md:flex relative bg-blue-700 text-white p-12 flex-col justify-between">

          <div>
            <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
              Academic Excellence
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Your Future,
              <br />
              Mapped Out.
            </h1>

            <p className="mt-4 text-blue-100">
              Join thousands of students
              discovering their ideal
              university through EduPath.
            </p>
          </div>

          <div>
            <p className="text-blue-100">
              Trusted by scholars worldwide
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="p-10">

          <div className="flex border-b mb-8">

            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-4 font-semibold ${
                isLogin
                  ? "border-b-2 border-blue-700 text-blue-700"
                  : "text-gray-500"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-4 font-semibold ${
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
              <h2 className="text-3xl font-bold">
                Welcome Back
              </h2>

              <p className="text-gray-500 mt-2">
                Access your personalized
                dashboard
              </p>

              <form
                onSubmit={handleLogin}
                className="space-y-4 mt-8"
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-xl p-3"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border rounded-xl p-3"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                />

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 rounded-xl"
                >
                  Login
                </button>
              </form>

              <div className="mt-6 p-4 rounded-xl bg-slate-100 text-sm">
                <p className="font-semibold">
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
              <h2 className="text-3xl font-bold">
                Create Account
              </h2>

              <p className="text-gray-500 mt-2">
                Start your journey
              </p>

              <form
                onSubmit={handleSignup}
                className="space-y-4 mt-8"
              >
                <input
                  placeholder="First Name"
                  className="w-full border rounded-xl p-3"
                  value={
                    signupData.firstName
                  }
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      firstName:
                        e.target.value,
                    })
                  }
                />

                <input
                  placeholder="Last Name"
                  className="w-full border rounded-xl p-3"
                  value={
                    signupData.lastName
                  }
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      lastName:
                        e.target.value,
                    })
                  }
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-xl p-3"
                  value={
                    signupData.email
                  }
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      email:
                        e.target.value,
                    })
                  }
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border rounded-xl p-3"
                  value={
                    signupData.password
                  }
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      password:
                        e.target.value,
                    })
                  }
                />

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 rounded-xl"
                >
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