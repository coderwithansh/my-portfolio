"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const AdminLoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6">

      <div className="w-full max-w-md">

        {/* Logo / Heading */}
        <div className="mb-8 text-center">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
            Admin Panel
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-3 text-white/50">
            Login to manage your portfolio blog.
          </p>

        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@portfolio.com"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/20 focus:border-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/20 focus:border-indigo-500"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-indigo-500 px-5 py-3 font-semibold text-white transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

          </form>

        </div>

        {/* Back */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-white/40 transition hover:text-white"
          >
            ← Back to portfolio
          </a>
        </div>

      </div>

    </main>
  );
};

export default AdminLoginPage;